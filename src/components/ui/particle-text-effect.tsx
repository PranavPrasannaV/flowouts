"use client"

import { useEffect, useRef, useState } from "react"

interface Vector2D {
    x: number
    y: number
}

class Particle {
    pos: Vector2D = { x: 0, y: 0 }
    vel: Vector2D = { x: 0, y: 0 }
    acc: Vector2D = { x: 0, y: 0 }
    target: Vector2D = { x: 0, y: 0 }

    closeEnoughTarget = 100
    maxSpeed = 8.0
    maxForce = 0.2
    particleSize = 4
    isKilled = false

    startColor = { r: 255, g: 255, b: 255 }
    targetColor = { r: 255, g: 255, b: 255 }
    colorWeight = 0
    colorBlendRate = 0.01

    move() {
        let proximityMult = 1
        const distance = Math.sqrt(Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2))

        if (distance < this.closeEnoughTarget) {
            proximityMult = distance / this.closeEnoughTarget
        }

        const towardsTarget = {
            x: this.target.x - this.pos.x,
            y: this.target.y - this.pos.y,
        }

        const magnitude = Math.sqrt(towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y)
        if (magnitude > 0) {
            towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult
            towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult
        }

        const steer = {
            x: towardsTarget.x - this.vel.x,
            y: towardsTarget.y - this.vel.y,
        }

        const steerMagnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y)
        if (steerMagnitude > 0) {
            steer.x = (steer.x / steerMagnitude) * this.maxForce
            steer.y = (steer.y / steerMagnitude) * this.maxForce
        }

        this.acc.x += steer.x
        this.acc.y += steer.y

        this.vel.x += this.acc.x
        this.vel.y += this.acc.y
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
        this.acc.x = 0
        this.acc.y = 0
    }

    draw(ctx: CanvasRenderingContext2D, drawAsPoints: boolean) {
        if (drawAsPoints) {
            ctx.fillStyle = `rgba(${this.targetColor.r}, ${this.targetColor.g}, ${this.targetColor.b}, 0.8)`
            ctx.fillRect(this.pos.x, this.pos.y, 2, 2)
        } else {
            ctx.fillStyle = `rgba(${this.targetColor.r}, ${this.targetColor.g}, ${this.targetColor.b}, 0.8)`
            ctx.beginPath()
            ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2)
            ctx.fill()
        }
    }

    kill(width: number, height: number) {
        if (!this.isKilled) {
            const randomPos = this.generateRandomPos(width / 2, height / 2, (width + height) / 2)
            this.target.x = randomPos.x
            this.target.y = randomPos.y
            this.isKilled = true
        }
    }

    generateRandomPos(x: number, y: number, mag: number): Vector2D {
        const randomX = Math.random() * 3000
        const randomY = Math.random() * 2000

        const direction = {
            x: randomX - x,
            y: randomY - y,
        }

        const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y)
        if (magnitude > 0) {
            direction.x = (direction.x / magnitude) * mag
            direction.y = (direction.y / magnitude) * mag
        }

        return {
            x: x + direction.x,
            y: y + direction.y,
        }
    }
}

interface ParticleTextEffectProps {
    words?: string[]
    logoSrc?: string
    transitionDelay?: number // ms before transitioning from logo to text
}

const DEFAULT_WORDS = ["FLOW"]

export function ParticleTextEffect({
    words = DEFAULT_WORDS,
    logoSrc = "/logo-infinity.png",
    transitionDelay = 2500
}: ParticleTextEffectProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number | undefined>(undefined)
    const particlesRef = useRef<Particle[]>([])
    const frameCountRef = useRef(0)
    const wordIndexRef = useRef(0)
    const mouseRef = useRef({ x: 0, y: 0, isPressed: false, isRightClick: false })
    const hasTransitionedRef = useRef(false)
    const logoImageRef = useRef<HTMLImageElement | null>(null)
    const isInitializedRef = useRef(false)

    const pixelSteps = 4
    const drawAsPoints = true

    const nextWord = (word: string, canvas: HTMLCanvasElement) => {
        const offscreenCanvas = document.createElement("canvas")
        offscreenCanvas.width = canvas.width
        offscreenCanvas.height = canvas.height
        const offscreenCtx = offscreenCanvas.getContext("2d")!

        const fontSize = Math.min(150, canvas.width * 0.18)

        offscreenCtx.fillStyle = "white"
        offscreenCtx.font = `bold ${fontSize}px Arial`
        offscreenCtx.textAlign = "center"
        offscreenCtx.textBaseline = "middle"
        offscreenCtx.fillText(word, canvas.width / 2, canvas.height / 2)

        const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height)
        const pixels = imageData.data

        const particles = particlesRef.current
        let particleIndex = 0

        const coordsIndexes: number[] = []
        for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
            coordsIndexes.push(i)
        }

        for (let i = coordsIndexes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]]
        }

        for (const coordIndex of coordsIndexes) {
            const pixelIndex = coordIndex
            const alpha = pixels[pixelIndex + 3]

            if (alpha > 0) {
                const x = (pixelIndex / 4) % canvas.width
                const y = Math.floor(pixelIndex / 4 / canvas.width)

                let particle: Particle

                if (particleIndex < particles.length) {
                    particle = particles[particleIndex]
                    particle.isKilled = false
                    particleIndex++
                } else {
                    particle = new Particle()
                    const randomPos = particle.generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2)
                    particle.pos.x = randomPos.x
                    particle.pos.y = randomPos.y
                    particles.push(particle)
                }

                particle.target.x = x
                particle.target.y = y
                particle.targetColor = { r: 255, g: 255, b: 255 }
            }
        }

        for (let i = particleIndex; i < particles.length; i++) {
            particles[i].kill(canvas.width, canvas.height)
        }
    }

    const loadLogoAsParticles = (image: HTMLImageElement, canvas: HTMLCanvasElement, isInitialLoad: boolean = false) => {
        const offscreenCanvas = document.createElement("canvas")
        offscreenCanvas.width = canvas.width
        offscreenCanvas.height = canvas.height
        const offscreenCtx = offscreenCanvas.getContext("2d")!

        // Scale logo to fit nicely in the canvas - LARGER for visibility
        const maxLogoWidth = Math.min(400, canvas.width * 0.5)
        const scale = maxLogoWidth / image.width
        const logoWidth = image.width * scale
        const logoHeight = image.height * scale
        const logoX = (canvas.width - logoWidth) / 2
        const logoY = (canvas.height - logoHeight) / 2

        offscreenCtx.drawImage(image, logoX, logoY, logoWidth, logoHeight)

        const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height)
        const pixels = imageData.data

        const particles = particlesRef.current
        let particleIndex = 0

        const coordsIndexes: number[] = []
        for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
            coordsIndexes.push(i)
        }

        // Shuffle for random particle assignment
        for (let i = coordsIndexes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]]
        }

        for (const coordIndex of coordsIndexes) {
            const pixelIndex = coordIndex
            const r = pixels[pixelIndex]
            const g = pixels[pixelIndex + 1]
            const b = pixels[pixelIndex + 2]
            const alpha = pixels[pixelIndex + 3]

            // Calculate brightness - check for white/bright pixels (the infinity symbol)
            const brightness = (r + g + b) / 3

            if (alpha > 128 && brightness > 200) { // White pixels only
                const x = (pixelIndex / 4) % canvas.width
                const y = Math.floor(pixelIndex / 4 / canvas.width)

                let particle: Particle

                if (particleIndex < particles.length) {
                    particle = particles[particleIndex]
                    particle.isKilled = false
                    particleIndex++
                } else {
                    particle = new Particle()
                    // For initial load, start particles much closer to center for faster formation
                    if (isInitialLoad) {
                        // Start near the target with small random offset
                        particle.pos.x = x + (Math.random() - 0.5) * 100
                        particle.pos.y = y + (Math.random() - 0.5) * 100
                    } else {
                        const randomPos = particle.generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2)
                        particle.pos.x = randomPos.x
                        particle.pos.y = randomPos.y
                    }
                    particles.push(particle)
                }

                particle.target.x = x
                particle.target.y = y
                particle.targetColor = { r: 255, g: 255, b: 255 }
            }
        }

        for (let i = particleIndex; i < particles.length; i++) {
            particles[i].kill(canvas.width, canvas.height)
        }
    }

    const animate = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")!
        const particles = particlesRef.current

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = particles.length - 1; i >= 0; i--) {
            const particle = particles[i]
            particle.move()
            particle.draw(ctx, drawAsPoints)

            if (particle.isKilled) {
                if (
                    particle.pos.x < 0 ||
                    particle.pos.x > canvas.width ||
                    particle.pos.y < 0 ||
                    particle.pos.y > canvas.height
                ) {
                    particles.splice(i, 1)
                }
            }
        }

        animationRef.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        // Load logo image
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.src = logoSrc
        logoImageRef.current = img

        const resizeObserver = new ResizeObserver(() => {
            const parent = canvas.parentElement;
            if (parent && parent.clientWidth > 0) {
                const newWidth = parent.clientWidth;
                const newHeight = window.innerWidth < 768 ? 300 : 500;

                // Only resize if dimensions actually changed
                if (canvas.width !== newWidth || canvas.height !== newHeight) {
                    canvas.width = newWidth;
                    canvas.height = newHeight;

                    // Re-render current state after resize
                    if (!isInitializedRef.current && logoImageRef.current?.complete) {
                        loadLogoAsParticles(logoImageRef.current, canvas, true);
                        isInitializedRef.current = true;
                    } else if (hasTransitionedRef.current) {
                        nextWord(words[0], canvas);
                    }
                }
            }
        });

        img.onload = () => {
            if (canvas.width > 0 && !isInitializedRef.current) {
                loadLogoAsParticles(img, canvas, true);
                isInitializedRef.current = true;
            }
        }

        resizeObserver.observe(canvas.parentElement!);

        animate()

        // Schedule transition from logo to text
        const transitionTimer = setTimeout(() => {
            if (canvas.width > 0) {
                hasTransitionedRef.current = true;
                nextWord(words[0], canvas);
            }
        }, transitionDelay);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current.x = e.clientX - rect.left
            mouseRef.current.y = e.clientY - rect.top
        }

        const handleMouseDown = () => { mouseRef.current.isPressed = true; }
        const handleMouseUp = () => { mouseRef.current.isPressed = false; }

        canvas.addEventListener("mousemove", handleMouseMove)
        canvas.addEventListener("mousedown", handleMouseDown)
        canvas.addEventListener("mouseup", handleMouseUp)

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
            clearTimeout(transitionTimer)
            resizeObserver.disconnect()
            canvas.removeEventListener("mousemove", handleMouseMove)
            canvas.removeEventListener("mousedown", handleMouseDown)
            canvas.removeEventListener("mouseup", handleMouseUp)
        }
    }, [words, logoSrc, transitionDelay])

    return (
        <div className="w-full flex justify-center items-center">
            <canvas
                ref={canvasRef}
                className="w-full h-[300px] md:h-[500px]"
            />
        </div>
    )
}


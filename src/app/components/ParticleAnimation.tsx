'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
  rgb: string;
  opacity: number;
  life: number;
  maxLife: number;
  glowSize: number;
}

// Helper function to convert hex to rgb
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '255, 255, 255';
  
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}

export default function ParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced trans pride flag colors with RGB values
    const colors = [
      { hex: '#5BCEFA', rgb: '91, 206, 250' }, // Light blue
      { hex: '#F5A9B8', rgb: '245, 169, 184' }, // Light pink
      { hex: '#FFFFFF', rgb: '255, 255, 255' }, // White
    ];
    
    const createParticle = (): Particle => {
      const maxLife = Math.random() * 400 + 300;
      const colorData = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 3 + 2,
        color: colorData.hex,
        rgb: colorData.rgb,
        opacity: Math.random() * 0.6 + 0.6, // Higher opacity for visibility
        life: maxLife,
        maxLife: maxLife,
        glowSize: Math.random() * 25 + 15,
      };
    };

    // Initialize particles for better network effect
    for (let i = 0; i < 100; i++) {
      particlesRef.current.push(createParticle());
    }

    const animate = () => {
      // Clear canvas completely for better visibility
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw network connections first (behind particles)
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const distance = Math.hypot(particle.x - otherParticle.x, particle.y - otherParticle.y);
          if (distance < 250) { // Increased connection distance
            const opacity = (250 - distance) / 250 * 0.4; // Stronger connections
            const lifeOpacity = (particle.life / particle.maxLife) * (otherParticle.life / otherParticle.maxLife);
            const finalOpacity = opacity * lifeOpacity;
            
            // Create gradient line with proper rgba colors
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            lineGradient.addColorStop(0, `rgba(${particle.rgb}, ${finalOpacity})`);
            lineGradient.addColorStop(0.5, `rgba(91, 206, 250, ${finalOpacity * 0.8})`); // Mix colors in middle
            lineGradient.addColorStop(1, `rgba(${otherParticle.rgb}, ${finalOpacity})`);
            
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position with enhanced movement
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.life--;

        // Wrap around edges smoothly
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Create more dynamic floating motion
        const lifeRatio = particle.life / particle.maxLife;
        particle.dy += Math.sin(particle.life * 0.01) * 0.008;
        particle.dx += Math.cos(particle.life * 0.01) * 0.008;

        // Apply gentle friction
        particle.dx *= 0.997;
        particle.dy *= 0.997;

        // Calculate opacity based on life
        const currentOpacity = particle.opacity * lifeRatio;

        // Draw enhanced glow effect with proper rgba colors
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.glowSize
        );
        
        gradient.addColorStop(0, `rgba(${particle.rgb}, ${currentOpacity * 0.8})`);
        gradient.addColorStop(0.4, `rgba(${particle.rgb}, ${currentOpacity * 0.4})`);
        gradient.addColorStop(1, `rgba(${particle.rgb}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw brighter core particle
        const coreGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        
        coreGradient.addColorStop(0, `rgba(${particle.rgb}, 1)`);
        coreGradient.addColorStop(0.5, `rgba(${particle.rgb}, ${currentOpacity * 0.8})`);
        coreGradient.addColorStop(1, `rgba(${particle.rgb}, 0)`);

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw solid bright core
        ctx.fillStyle = `rgba(${particle.rgb}, ${Math.min(currentOpacity * 1.2, 1)})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Respawn particle if it dies
        if (particle.life <= 0) {
          particlesRef.current[index] = createParticle();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
    />
  );
} 
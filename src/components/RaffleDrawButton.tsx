import { useThemeStore } from "../stores/ThemeStore";
import { useState, useRef, useCallback, useEffect } from 'react'
import { useInterval } from 'react-use'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
}

type RaffleDrawButtonProps = {
    handleEnterUsers: () => void;
};

const RaffleDrawButton = ({handleEnterUsers} : RaffleDrawButtonProps) => {
  const theme = useThemeStore();
  const [particles, setParticles] = useState<Particle[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const createParticles = useCallback(() => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const newParticles: Particle[] = []
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = 1 + Math.random() * .8
      newParticles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 100,
      })
    }
    setParticles(prev => [...prev, ...newParticles])
  }, [])

  const updateParticles = useCallback(() => {
    setParticles(prev =>
      prev
        .map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 1,
        }))
        .filter(p => p.life > 0)
    )
  }, [])

  useInterval(updateParticles, particles.length > 0 ? 16 : null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(p => {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.scale(2, 2)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(-2, -2, -4, 2, 0, 4)
      ctx.bezierCurveTo(4, 2, 2, -2, 0, 0)
      ctx.fillStyle = `rgba(255, 0, 0, ${p.life / 100})`
      ctx.fill()
      ctx.restore()
    })
  }, [particles])

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])


  return (
    <div>
   <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    <button
          className={` p-2 rounded-md`}
          ref={buttonRef}
          onClick={() =>{
            createParticles()
            setTimeout( () => {
                handleEnterUsers();
              }, 1400)}}
          style={{
            backgroundColor: theme.buttonColor,
            color: theme.buttonTextColor,
          }}
        >
            
          {theme.buttonText}
        </button>
    </div>
  )
}

export default RaffleDrawButton
import { useEffect, useState } from 'react'

export default function useMousePosition(relativeTo) {
  const [position, setPosition] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 })

  useEffect(() => {
    const update = (event) => {
      const rect = relativeTo?.current?.getBoundingClientRect()
      const left = rect?.left ?? 0
      const top = rect?.top ?? 0
      const width = rect?.width ?? window.innerWidth
      const height = rect?.height ?? window.innerHeight
      const x = event.clientX - left
      const y = event.clientY - top
      setPosition({
        x,
        y,
        normalizedX: x / width - 0.5,
        normalizedY: y / height - 0.5,
      })
    }
    window.addEventListener('pointermove', update, { passive: true })
    return () => window.removeEventListener('pointermove', update)
  }, [relativeTo])

  return position
}

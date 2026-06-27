import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let raf
    let mouseX = -100, mouseY = -100
    let ringX = -100, ringY = -100

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseEnterLink = () => ring.classList.add('hovered')
    const onMouseLeaveLink = () => ring.classList.remove('hovered')

    const animate = () => {
      // Dot snaps to cursor
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'

      // Ring follows with easing
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'

      raf = requestAnimationFrame(animate)
    }

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()
    addHoverListeners()

    // Re-attach after potential DOM changes
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

import { ElementType, useEffect, useRef, useState, createElement, useMemo } from 'react'

interface MultiLineTextTypeProps {
  className?: string
  lines: string[]
  as?: ElementType
  typingSpeed?: number
  initialDelay?: number
  pauseDuration?: number
  loop?: boolean
  fromColor?: string
  toColor?: string
  variableSpeed?: { min: number; max: number }
  onComplete?: () => void
  startOnVisible?: boolean
}

const TextTypeMulti = ({
  lines,
  as: Component = 'div',
  typingSpeed = 5,
  initialDelay = 0,
  pauseDuration = 0,
  loop = true,
  className = '',
  fromColor = '#c5c5c5',
  toColor = '#fff',
  variableSpeed,
  onComplete,
  startOnVisible = false,
  ...props
}: MultiLineTextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(!startOnVisible)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const charRefs = useRef<(HTMLSpanElement | null)[]>([])
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // 将所有行合并成一个字符数组
  const { allChars, totalChars } = useMemo(() => {
    const allChars: { char: string; lineIndex: number; charIndex: number }[] = []
    let totalIndex = 0

    lines.forEach((line, lineIndex) => {
      line.split('').forEach((char, charIndex) => {
        allChars.push({ char, lineIndex, charIndex })
        totalIndex++
      })
    })

    return { allChars, totalChars: totalIndex }
  }, [lines])

  // 清理定时器
  const clearCurrentTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // 重置动画
  const resetAnimation = () => {
    clearCurrentTimeout()
    charRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.color = fromColor
      }
    })
    setCurrentCharIndex(0)
    setIsAnimating(false)
  }

  // Intersection Observer
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [startOnVisible])

  // 开始动画
  const startAnimation = () => {
    if (isAnimating) return

    resetAnimation()
    setIsAnimating(true)

    timeoutRef.current = setTimeout(() => {
      setCurrentCharIndex(1)
    }, initialDelay)
  }

  // 动画步骤
  useEffect(() => {
    if (!isVisible || !isAnimating) return
    if (currentCharIndex === 0) return

    const currentIndex = currentCharIndex - 1

    if (currentIndex < totalChars) {
      // 变色当前字符
      const charRef = charRefs.current[currentIndex]
      if (charRef) {
        charRef.style.color = toColor
      }

      // 继续下一个字符
      if (currentIndex + 1 < totalChars) {
        const speed = variableSpeed
          ? Math.random() * (variableSpeed.max - variableSpeed.min) + variableSpeed.min
          : typingSpeed

        timeoutRef.current = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 1)
        }, speed)
      } else {
        // 动画完成
        if (onComplete) {
          onComplete()
        }

        if (loop) {
          timeoutRef.current = setTimeout(() => {
            startAnimation()
          }, pauseDuration)
        } else {
          setIsAnimating(false)
        }
      }
    }

    return () => clearCurrentTimeout()
  }, [
    currentCharIndex,
    isAnimating,
    totalChars,
    typingSpeed,
    toColor,
    variableSpeed,
    pauseDuration,
    loop,
    onComplete,
    isVisible,
    startAnimation,
  ])

  // 启动动画
  useEffect(() => {
    if (isVisible && !isAnimating && totalChars > 0) {
      startAnimation()
    }
  }, [isAnimating, isVisible, startAnimation, totalChars])

  // 清理
  useEffect(() => {
    return () => clearCurrentTimeout()
  }, [])

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            // 计算全局字符索引
            const globalIndex = allChars.findIndex(
              (item) => item.lineIndex === lineIndex && item.charIndex === charIndex
            )

            return (
              <span
                key={`${lineIndex}-${charIndex}`}
                ref={(el) => (charRefs.current[globalIndex] = el)}
                style={{ color: fromColor }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default TextTypeMulti

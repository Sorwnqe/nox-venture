import { useEffect, useState } from 'react'

const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return // SSR 安全判断

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    // 初始设置
    setIsMobile(mediaQuery.matches)

    // 添加监听器（兼容旧浏览器）
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }, [breakpoint])

  return isMobile
}

export default useIsMobile

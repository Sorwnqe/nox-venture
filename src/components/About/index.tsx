import { Box, Center, Text, Flex, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { ArrowDownSvg } from '../icons/arrow-down'
import Title from '../Title'
import useIsMobile from '../../hooks/useIsMobile'

export const AboutSection = () => {
  const isMobile = useIsMobile()
  const [currentKeyframe, setCurrentKeyframe] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // 四段文字内容
  const textSegments = isMobile
    ? [
        {
          lines: ['NOX Venture is a Full-Lifecycle Crypto Incubation Fund.'],
        },
        {
          lines: ['We live on the frontier of Web3 and believe in progress through innovation.'],
        },
        {
          lines: ['We partner with ambitious teams from the earliest stages, acting as'],
        },
        {
          lines: ['strategic co-founders to guide projects from idea to exchange listing.'],
        },
        {
          lines: ['Our comprehensive support covers technology, strategy, funding,'],
        },
        {
          lines: ["and market access to ensure your project's success."],
        },
        {
          lines: [`If you're building something ambitious at the frontier of Web3,`],
        },
        {
          lines: ['come build with us.'],
        },
      ]
    : [
        {
          lines: [
            'NOX Venture is a Full-Lifecycle Crypto Incubation Fund.',
            'We live on the frontier of Web3 and believe in progress through innovation.',
          ],
        },
        {
          lines: [
            'We partner with ambitious teams from the earliest stages, acting as',
            'strategic co-founders to guide projects from idea to exchange listing.',
          ],
        },
        {
          lines: [
            'Our comprehensive support covers technology, strategy, funding,',
            "and market access to ensure your project's success.",
          ],
        },
        {
          lines: [
            "If you're building something ambitious at the frontier of Web3,",
            'come build with us.',
          ],
        },
      ]

  let touchStartY = 0

  const handleNextLine = () => {
    setCurrentKeyframe((prev) =>
      prev === textSegments.length ? textSegments.length : (prev + 1) % textSegments.length
    )
  }

  const handlePreLine = () => {
    setCurrentKeyframe((prev) => (prev === 0 ? 0 : (prev - 1) % textSegments.length))
  }

  // 添加原生事件监听器到容器
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheelNative = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()

      console.log('Native wheel event:', e)

      if (e.deltaY > 0) {
        handleNextLine()
      } else if (e.deltaY < 0) {
        handlePreLine()
      }
    }

    const handleTouchStartNative = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEndNative = (e: TouchEvent) => {
      e.preventDefault()
      e.stopPropagation()

      const touchEndY = e.changedTouches[0].clientY
      const deltaY = touchStartY - touchEndY

      if (deltaY > 30) {
        handleNextLine()
      } else if (deltaY < -30) {
        handlePreLine()
      }
    }

    // 添加事件监听器，设置 passive: false 以允许 preventDefault
    container.addEventListener('wheel', handleWheelNative, { passive: false })
    container.addEventListener('touchstart', handleTouchStartNative, { passive: true })
    container.addEventListener('touchend', handleTouchEndNative, { passive: false })

    // 清理函数
    return () => {
      container.removeEventListener('wheel', handleWheelNative)
      container.removeEventListener('touchstart', handleTouchStartNative)
      container.removeEventListener('touchend', handleTouchEndNative)
    }
  }, [currentKeyframe, textSegments.length]) // 依赖数组包含相关状态

  return (
    <Box
      width="100%"
      id="ABOUT"
      bg="black"
      color="white"
      minH={{ base: '800px', md: '100vh' }}
      py={{ base: '20px', md: '60px' }}
    >
      <motion.div
        layout
        style={{ width: '100%' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <Box textAlign="left" width="100%" mt="44px">
          <Title>/ABOUT</Title>
        </Box>
      </motion.div>

      <motion.div
        layout
        style={{ width: '100%' }}
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <Center h={{ base: '200px', md: '300px' }} my={{ base: '20px', md: '60px' }}>
          <Box position="relative" w="auto" h="100%" opacity="0.7">
            <video
              src="/about-t.mp4"
              autoPlay
              muted
              playsInline
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Center>
      </motion.div>

      <Box>
        <Box
          textAlign="left"
          fontSize={{ base: '20px', md: '24px' }}
          lineHeight="1.6"
          fontFamily="Dotemp"
        >
          <motion.div
            layout
            style={{ width: '100%' }}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
          >
            {/* 滚动文本容器 - 显示2行高亮 */}
            <Box
              h={{ base: '300px', md: '300px' }} // 2行的高度 (60px * 2)
              overflow="hidden"
              position="relative"
              mx="auto"
              textAlign="center"
            >
              {/* 上方渐变遮罩 */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                h="30px"
                bg="linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)"
                zIndex="3"
                pointerEvents="none"
              />

              {/* 下方渐变遮罩 */}
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                h="30px"
                bg="linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)"
                zIndex="3"
                pointerEvents="none"
              />

              {/* 高亮区域背景（可选） */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                h={{ base: '200px', md: '120px' }}
                bg="rgba(255, 255, 255, 0.02)"
                zIndex="1"
                pointerEvents="none"
              />

              {/* 滚动文本内容 */}
              <Box
                position="relative"
                transition="transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                transform={`translateY(${-currentKeyframe * (isMobile ? 200 : 120)}px)`}
                zIndex="2"
                fontFamily="Space Mono"
                ref={containerRef}
                style={{
                  touchAction: 'none', // 禁用默认触摸行为
                  overscrollBehavior: 'contain', // 防止滚动传播到父元素
                }}
              >
                {textSegments.map((segment, segmentIndex) => (
                  <Box key={segmentIndex} h={{ base: '200px', md: '120px' }} py="0">
                    {segment.lines.map((line, lineIndex) => (
                      <Text
                        key={`${segmentIndex}-${lineIndex}`}
                        h="60px"
                        lineHeight="60px"
                        mb="0"
                        fontSize={{ base: '20px', md: '24px' }}
                        fontWeight="300"
                        color="white"
                        opacity={segmentIndex === currentKeyframe ? 1 : 0.4}
                        transition="opacity 0.8s ease"
                        letterSpacing="0.5px"
                      >
                        {line}
                      </Text>
                    ))}
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* Scroll 控制按钮 */}
          <Flex
            direction="column"
            width="fit-content"
            gap="8px"
            fontSize="16px"
            alignItems="center"
            mx="auto"
            mt={{ base: '30px', md: '40px' }}
            userSelect="none"
            className="animate-bounce cursor-pointer"
          >
            {/* 向下箭头图标 */}
            <Icon as={ArrowDownSvg} />
            <Text fontWeight="300" letterSpacing="1px">
              Scroll
            </Text>
          </Flex>

          {/* 关键帧指示器（可选，隐藏但保留逻辑） */}
          <Box opacity="0" pointerEvents="none">
            {textSegments.map((_, index) => (
              <Box
                key={index}
                w="6px"
                h="6px"
                borderRadius="50%"
                bg={index === currentKeyframe ? 'white' : 'rgba(255,255,255,0.3)'}
                display="inline-block"
                mx="4px"
                transition="background 0.3s ease"
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

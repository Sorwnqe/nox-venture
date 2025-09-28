import { Box, Center, Flex, Grid, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Title from '../Title'
import { useState } from 'react'
import TextTypeMulti from '../TextTypeMulti'
import { jumpAnchor } from '../../utils'
import useIsMobile from '../../hooks/useIsMobile'

export const AboutSection = () => {
  const containerH = useBreakpointValue({ base: 'auto', md: '100%' })!

  const [texType, setTextType] = useState<boolean>()
  const isMobile = useIsMobile()

  const textSegments: Array<string> = [
    'We live on the frontier of Web3 and believe in progress through innovation.',
    'We partner with ambitious teams from the earliest stages, acting as strategic co-founders to guide projects from idea to exchange listing.',
    `If you're building something ambitious at the frontier of Web3, come build with us.`,
  ]

  return (
    <Grid
      width="100%"
      id="ABOUT"
      bg="black"
      color="white"
      minH={{ base: '700px', md: '800px' }}
      py={{ base: '20px', md: '60px' }}
      gridTemplateColumns={{ base: '1fr', md: '1fr 0.5fr 1fr;' }}
      gridTemplateRows={{ base: 'repeat(3, 1fr)', md: '1fr' }}
      display={{ base: 'block', md: 'grid' }}
    >
      <Box
        gridArea={{ base: ' 1 / 1 / 2 / 2', md: '1 / 1 / 2 / 2' }}
        h={{ base: 'auto', md: '100%' }}
      >
        <motion.div
          layout
          style={{ width: '100%', height: containerH, position: 'relative' }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <Box
            textAlign="left"
            width="100%"
            mt="44px"
            position={{ base: 'relative', md: 'absolute' }}
            top={0}
          >
            <Title>ABOUT</Title>
          </Box>
          <Flex
            alignItems="center"
            w="100%"
            h={{ base: 'auto', md: '100%' }}
            py={{ base: '70px', md: '0' }}
            textAlign={{ base: 'center', md: 'left' }}
            fontFamily="Md_Gothic"
            fontSize={{ base: '16px', md: '28px' }}
          >
            {isMobile ? (
              <>NOX VENTURES IS A FULL-LIFECYCLE CRYPTO INCUBATION FUND.</>
            ) : (
              <>
                NOX VENTURES IS A <br />
                FULL-LIFECYCLE CRYPTO <br />
                INCUBATION FUND.
              </>
            )}
          </Flex>
          {!isMobile && (
            <Flex
              fontSize={{ base: '14px', md: '16px' }}
              letterSpacing="2px"
              py="7px"
              w="fit-content"
              px="20px"
              bg="rgba(217, 217, 217, 0.2)"
              alignItems="center"
              justify="center"
              border="1px solid #6C6C6C"
              fontWeight={400}
              fontFamily="Minecraft"
              gap="8px"
              position="absolute"
              top={{ base: '20%', md: '80%' }}
              cursor="pointer"
              onClick={() => jumpAnchor('CONTACT')}
            >
              <Box w="4px" h="4px" bg="#fff"></Box>
              Join us now
            </Flex>
          )}
        </motion.div>
      </Box>

      <Box
        gridArea={{ base: ' 2 / 1 / 3 / 2', md: '1 / 2 / 2 / 3' }}
        h={{ base: 'auto', md: '100%' }}
        mb={{ base: '40px', md: '0' }}
      >
        <motion.div
          layout
          style={{ width: '100%', height: containerH, position: 'relative' }}
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <Flex
            position="relative"
            h={{ base: 'auto', md: '100%' }}
            w="100%"
            alignItems="center"
            justifyContent="center"
            flexDir={{ base: 'row', md: 'column' }}
          >
            <Box
              w={{ base: 'auto', md: '0.5px' }}
              h={{ base: '0.5px', md: 'auto' }}
              flex="auto"
              bg="rgba(255, 255, 255, 0.3)"
            ></Box>
            <Center
              w={{ base: '100px', md: '200px' }}
              h={{ base: '100px', md: '200px' }}
              p="5px"
              position="relative"
            >
              {/* 圆形边框 */}
              <Box
                w="100%"
                h="100%"
                border="1px solid rgba(255, 255, 255, 0.3)"
                borderRadius="50%"
                position="absolute"
                zIndex={1}
              />
              {isMobile && (
                <Box
                  w="calc(100% - 5px)"
                  h="calc(100% - 5px)"
                  border="1px solid rgba(255, 255, 255, 0.3)"
                  borderRadius="50%"
                  position="absolute"
                  zIndex={1}
                />
              )}

              {/* 视频容器 */}
              <Box w="100%" h="100%" overflow="hidden" borderRadius="50%" zIndex={0} p="10px">
                <video
                  src="/about-t.mp4"
                  autoPlay
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Center>

            <Box
              w={{ base: 'auto', md: '0.5px' }}
              h={{ base: '0.5px', md: 'auto' }}
              flex="auto"
              bg="rgba(255, 255, 255, 0.3)"
            ></Box>
          </Flex>
        </motion.div>
      </Box>
      <Box gridArea={{ base: '3 / 1 / 4 / 2', md: '1 / 3 / 2 / 4' }}>
        <Flex
          h="100%"
          alignItems="center"
          textAlign="left"
          fontSize={{ base: '18px', md: '20px' }}
          lineHeight={{ base: '1.2', md: '1.6' }}
          fontFamily="Space Mono"
        >
          {
            <motion.div
              layout
              style={{
                width: '100%',
                minHeight: '300px',
              }}
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
              onViewportEnter={() => setTextType(true)}
              onViewportLeave={() => setTextType(false)}
            >
              {texType && (
                <Box mb={{ base: '12px', md: '20px' }}>
                  <TextTypeMulti
                    lines={textSegments}
                    fromColor="#333"
                    toColor="#fff"
                    typingSpeed={2}
                    linesClass="mb-[70px]"
                  />
                </Box>
              )}
            </motion.div>
          }

          {/* Scroll 控制按钮 */}
          {/* <Flex
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
            <Icon as={ArrowDownSvg} />
            <Text fontWeight="300" letterSpacing="1px">
              Scroll
            </Text>
          </Flex> */}
        </Flex>
      </Box>
    </Grid>
  )
}

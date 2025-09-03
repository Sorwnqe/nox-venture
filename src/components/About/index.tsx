import { Box, Center, Text, Flex, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowDownSvg } from '../icons/arrow-down'
import Title from '../Title'
import TextType from '../TextType'
import { useState } from 'react'

export const AboutSection = () => {
  const [texType, setTextType] = useState<boolean>()

  const textSegments: Array<string> = [
    'NOX Ventures is a Full-Lifecycle Crypto Incubation Fund.',
    'We live on the frontier of Web3 and believe in progress through innovation.',
    'We partner with ambitious teams from the earliest stages, acting as',
    'strategic co-founders to guide projects from idea to exchange listing.',
    'Our comprehensive support covers technology, strategy, funding,',
    "and market access to ensure your project's success.",
    `If you're building something ambitious at the frontier of Web3,`,
    'come build with us.',
  ]
  const getRandom = (len: number) => Math.floor(Math.random() * len) + 1

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
        <Center h={{ base: '150px', md: '300px' }} my={{ base: '20px', md: '60px' }}>
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
          fontSize={{ base: '16px', md: '24px' }}
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
              {texType &&
                textSegments.map((segment, segmentIndex) => (
                  <Box key={segmentIndex} mb={{ base: '12px', md: '0px' }}>
                    <TextType
                      textColors={['#c5c5c5']}
                      key={`${segmentIndex}`}
                      text={segment}
                      initialDelay={300 * getRandom(4)}
                      showCursor={false}
                    ></TextType>
                  </Box>
                ))}
            </motion.div>
          }

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
        </Box>
      </Box>
    </Box>
  )
}

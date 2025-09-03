import { createFileRoute } from '@tanstack/react-router'
import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/react'
import { type FC } from 'react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import CountUpText from '../components/CountUpText'
import Title from '../components/Title'
import ServiceLines from '../components/ServiceLines'
import LogoLoop, { LogoItem } from '../components/LogoLoop'
import { AboutSection } from '../components/About'
import useIsMobile from '../hooks/useIsMobile'

export const Route = createFileRoute('/')({
  component: Index,
})

const titleAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
`

const GraduallyEnteringTextKeyframes = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const GraduallyEnteringText: FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  return (
    <>
      {text.split('').map((char, i) => (
        <Box
          as="span"
          key={i}
          animation={`${GraduallyEnteringTextKeyframes} 1500ms linear forwards`}
          opacity={0}
          style={{
            animationDelay: `${delay + i * 30}ms`,
          }}
        >
          {char}
        </Box>
      ))}
    </>
  )
}

function Index() {
  const isMobile = useIsMobile()
  return (
    <Center
      w="100%"
      flexDirection="column"
      mb={{ base: '0', md: '120px' }}
      sx={{
        '.center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Flex direction="column" w="100%" maxW="1480px" align="center" px="20px">
        <Flex minH={{ base: '750px', md: 'calc(100vh - 60px)' }} align="center" id="HOME">
          <Box className="mx-auto" minH={{ base: 'auto', xl: '400px' }} color="#fff">
            <Heading
              fontSize={{ base: '22px', md: '64px' }}
              lineHeight={{ base: '150%', md: '80px' }}
              animation={`${titleAnimation} 5s infinite linear`}
            >
              <Box className="text-center" letterSpacing="5px">
                <GraduallyEnteringText text="FULL-LIFECYCLE CRYPTO" />
              </Box>
              <Box className="text-center" letterSpacing="5px">
                <GraduallyEnteringText text="INCUBATION FUND" />
              </Box>
              <Box
                mt={'12px'}
                fontSize={{ base: '16px', md: '20px' }}
                lineHeight="150%"
                color="#C5C5C5"
                fontWeight={400}
                fontFamily="Space Mono"
                textAlign="center"
              >
                <GraduallyEnteringText text="*ACTING AS THE STRATEGIC CO-FOUNDER FOR HIGH-POTENTIAL CRYPTO TEAMS*" />
              </Box>
            </Heading>

            <Flex
              fontSize={{ base: '14px', md: '16px' }}
              letterSpacing="2px"
              py="7px"
              w="fit-content"
              px="20px"
              bg="rgba(217, 217, 217, 0.2)"
              mt="107px"
              mx="auto"
              alignItems="center"
              justify="center"
              border="1px solid #6C6C6C"
              fontWeight={400}
            >
              $<CountUpText to={584499499.11} separator="," />
            </Flex>
            <Box
              mt={'17px'}
              fontSize={{ base: '14px', md: '16px' }}
              lineHeight="150%"
              color="#C5C5C5"
              fontWeight={400}
              fontFamily="Space Mono"
              textAlign="center"
            >
              <GraduallyEnteringText text="GLOBAL CRYPTO MARKET CAPITALIZATION" />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        w="100%"
        maxW="1480px"
        align="center"
        px={{ base: '20px', md: '80px' }}
      >
        <AboutSection />
      </Flex>

      <motion.div
        style={{ width: '100%' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <Flex
          id="SERVICES"
          direction="column"
          mt={{ base: '30px', md: '60px' }}
          w="100%"
          maxW="1480px"
          align="center"
          mx="auto"
          px={{ base: '20px', md: '80px' }}
        >
          <Box textAlign="left" width="100%" mt={{ base: '30px', md: '44px' }}>
            <Title>/SERVICES</Title>
          </Box>
        </Flex>
      </motion.div>
      <VStack spacing={4} align="stretch" mt={{ base: '40px', md: '50px' }} w="100%">
        {services.map((service, i) => (
          <motion.div
            key={i}
            style={{ width: '100%' }}
            initial={{ y: 50 + i * 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 + i * 0.5 } }}
          >
            {service}
          </motion.div>
        ))}
      </VStack>

      <Flex
        direction="column"
        w="100%"
        maxW="1480px"
        align="center"
        mx="auto"
        mt={{ base: '30px', md: '60px' }}
      >
        <motion.div
          style={{ width: '100%', marginTop: '60px' }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          id="PORTFOLIO"
        >
          <Box
            textAlign="left"
            width="100%"
            mt={{ base: '34px', md: '44px' }}
            px={{ base: '20px', md: '80px' }}
          >
            <Title>/PORTFOLIO</Title>
          </Box>
          <Box mt={{ base: '64px', md: '114px' }} width="100%" h={{ base: '200px', md: '300px' }}>
            <LogoLoop
              logos={techLogos}
              speed={50}
              boxHeight={isMobile ? 200 : 300}
              pauseOnHover
              scaleOnHover
              fadeOut
            />
          </Box>
        </motion.div>
      </Flex>
    </Center>
  )
}
const techLogos: LogoItem[] = [
  { src: '/images/logos/surge.png', alt: 'metis', href: 'https://surgeai.io' },
  { src: '/images/logos/scallop.png', alt: 'scallop', href: 'https://scallop.io' },
  { src: '/images/logos/cetus.png', alt: 'cetus', href: 'https://cetus.zone' },
  { src: '/images/logos/metis.png', alt: 'metis', href: 'https://metis.io' },
]

const services = [
  <ServiceLines text="VENTURE CAPITAL" count="001" contentW="1480px" />,
  <ServiceLines text="ADVISORY & STRATEGY" count="002" contentW="1480px" />,
  <ServiceLines text="MARKETING & COMMUNITY BUILDING" count="003" contentW="1480px" />,
  <ServiceLines text="CAPITAL MARKETS & TRADING" count="004" contentW="1480px" />,
  <ServiceLines text="INCUBATION" count="005" contentW="1480px" />,
]

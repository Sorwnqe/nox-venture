import { createFileRoute } from '@tanstack/react-router'
import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/react'
import { type FC } from 'react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import UnicornScene from 'unicornstudio-react'
import CountUpText from '../components/CountUpText'
import Title from '../components/Title'
import ServiceLines from '../components/ServiceLines'
import LogoLoop, { LogoItem } from '../components/LogoLoop'
import { LogoSvg } from '../components/icons/logo.svg'
import { AboutSection } from '../components/About'

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
  return (
    <Center
      w="100%"
      flexDirection="column"
      mb="120px"
      sx={{
        '.center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Box
        className="absolute w-full top-[-150px] left-0 z-[-1] opacity-[0.6]"
        h="100vh"
        scale="1.3"
      >
        <UnicornScene jsonFilePath="/motion.json" width="100%" height="100%" />
      </Box>
      <Flex direction="column" w="100%" maxW="1480px" align="center" px="20px">
        <Flex minH="calc(100vh - 60px)" align="center" id="HOME">
          <Box className="mx-auto" minH={{ base: 'auto', xl: '400px' }} color="#fff">
            <Heading
              fontSize={{ base: '36px', md: '64px' }}
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
        <AboutSection />
      </Flex>

      <motion.div
        style={{ width: '100%', marginTop: '60px' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        id="SERVICES"
      >
        <Flex direction="column" w="100%" maxW="1480px" align="center" mx="auto">
          <Box textAlign="left" width="100%" mt="44px">
            <Title>/SERVICES</Title>
          </Box>
        </Flex>
      </motion.div>
      <VStack spacing={4} align="stretch" mt="50px" w="100%">
        {services.map((service, i) => (
          <motion.div
            key={i}
            style={{ width: '100%' }}
            initial={{ y: 100 + i * 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 + i * 0.5 } }}
          >
            {service}
          </motion.div>
        ))}
      </VStack>

      <Flex direction="column" w="100%" maxW="1480px" align="center" mx="auto" mt="60px">
        <motion.div
          style={{ width: '100%', marginTop: '60px' }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          id="PORTFOLIO"
        >
          <Box textAlign="left" width="100%" mt="44px">
            <Title>/PORTFOLIO</Title>
          </Box>
          <Box mt={'114px'} width="100%" h="300px">
            <LogoLoop
              logos={techLogos}
              speed={50}
              boxHeight={300}
              logoHeight={80}
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
  <ServiceLines text="VENTURE CAPITAL" count="001" icon={LogoSvg} contentW="1480px" />,
  <ServiceLines text="ADVISORY & STRATEGY" count="002" icon={LogoSvg} contentW="1480px" />,
  <ServiceLines
    text="MARKETING & COMMUNITY BUILDING"
    count="003"
    icon={LogoSvg}
    contentW="1480px"
  />,
  <ServiceLines text="CAPITAL MARKETS & TRADING" count="004" icon={LogoSvg} contentW="1480px" />,
  <ServiceLines text="INCUBATION" count="005" icon={LogoSvg} contentW="1480px" />,
]

import { Center, Flex, Image, Text } from '@chakra-ui/react'
import { ReactNode } from '@tanstack/react-router'
import useIsMobile from '../hooks/useIsMobile'

const ServiceLines = ({
  text,
  contentW,
  count,
}: {
  text: ReactNode
  contentW: string
  count: string
}) => {
  const isMobile = useIsMobile()
  return (
    <Center
      position="relative"
      color="#fff"
      transition="0.4s all ease-in"
      _hover={{
        bgColor: '#fff',
        color: '#000',

        '.service-count': {
          color: '#000',
          opacity: 1,
        },
        '.service-img': {
          opacity: 1,
        },
      }}
    >
      {isMobile ? (
        <Flex
          justify="space-between"
          w={contentW}
          fontSize={{ base: '18px', md: '32px' }}
          letterSpacing="2px"
          fontWeight="400"
          alignItems="center"
          fontFamily="Md_Gothic, Brandon"
          px={{ base: '10px', md: '120px' }}
        >
          <Flex
            py={{ base: '26px', md: '46px' }}
            gap={{ base: '10px', md: '20px' }}
            alignItems="center"
          >
            <Image
              className="service-img"
              opacity="0"
              transition="0.4s all ease-in"
              src={'/images/f717106600ffa7ab86f950537c9b466.png'}
              width={{ base: '80px', md: '120px' }}
              height={{ base: '80px', md: '120px' }}
            />

            {text.replace('&', '')}
          </Flex>
        </Flex>
      ) : (
        <Flex
          justify="space-between"
          w={contentW}
          fontSize={{ base: '22px', md: '32px' }}
          letterSpacing="2px"
          fontWeight="400"
          alignItems="center"
          fontFamily="Md_Gothic, Roboto"
          px={{ base: '40px', md: '120px' }}
        >
          <Flex
            py={{ base: '22px', md: '46px' }}
            gap={{ base: '20px', md: '20px' }}
            alignItems="center"
          >
            <Text
              className="service-count"
              opacity="0"
              transition="0.4s all ease-in"
              fontFamily="Roboto"
              fontWeight="600"
              fontSize={{ base: '18px', md: '30px' }}
            >
              {count}
            </Text>

            {text}
          </Flex>
          <Image
            className="service-img"
            opacity="0"
            transition="0.4s all ease-in"
            src={'/images/f717106600ffa7ab86f950537c9b466.png'}
            width={{ base: '80px', md: '120px' }}
            height={{ base: '80px', md: '120px' }}
          />
        </Flex>
      )}
    </Center>
  )
}

export default ServiceLines

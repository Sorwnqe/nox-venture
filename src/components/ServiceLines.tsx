import { Center, Flex, Icon, Text } from '@chakra-ui/react'
import { ReactNode } from '@tanstack/react-router'

const ServiceLines = ({
  text,
  icon,
  contentW,
  count,
}: {
  text: ReactNode
  icon: ReactNode
  contentW: string
  count: string
}) => {
  return (
    <Center
      position="relative"
      color="#fff"
      transition="0.4s all ease-in"
      _hover={{
        bgColor: '#fff',
        color: '#000',

        '.service-count': {
          opacity: 1,
        },
      }}
      px={{ base: '20px', md: '0px' }}
    >
      <Flex
        justify="space-between"
        w={contentW}
        fontSize={{ base: '22px', md: '32px' }}
        letterSpacing="2px"
        fontWeight="400"
        alignItems="center"
        fontFamily="Minecraft"
      >
        <Flex
          py={{ base: '26px', md: '46px' }}
          gap={{ base: '20px', md: '20px' }}
          alignItems="center"
        >
          <Text className="service-count" opacity="0" transition="0.4s all ease-in">
            {count}
          </Text>
          {text}
        </Flex>
        <Icon
          as={icon}
          width={{ base: '80px', md: '120px' }}
          height={{ base: '80px', md: '120px' }}
        />
      </Flex>
    </Center>
  )
}

export default ServiceLines

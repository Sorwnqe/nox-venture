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
    >
      <Flex
        justify="space-between"
        w={contentW}
        fontSize="32px"
        letterSpacing="2px"
        fontWeight="400"
        alignItems="center"
        fontFamily="Minecraft"
      >
        <Flex py="46px" gap="20px">
          <Text className="service-count" opacity="0" transition="0.4s all ease-in">
            {count}
          </Text>
          {text}
        </Flex>
        <Icon as={icon} width="120px" height="120px" />
      </Flex>
    </Center>
  )
}

export default ServiceLines

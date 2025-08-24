import { Box, Center, Flex, Icon } from '@chakra-ui/react'
import { ReactNode } from '@tanstack/react-router'

const ServiceLines = ({
  text,
  icon,
  contentW,
}: {
  text: ReactNode
  icon: ReactNode
  contentW: string
}) => {
  return (
    <Center
      position="relative"
      color="#fff"
      _hover={{
        transition: '0.6s all ease-in-out',
        bgColor: '#fff',
        color: '#000',
      }}
    >
      <Flex
        justify="space-between"
        w={contentW}
        fontSize="28px"
        letterSpacing="2px"
        fontWeight="400"
        px="10px"
        alignItems="center"
      >
        <Box py="66px">{text}</Box>
        <Icon as={icon} width="120px" height="120px" />
      </Flex>
    </Center>
  )
}

export default ServiceLines

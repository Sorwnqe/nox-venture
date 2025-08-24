import { Box, Flex, Icon } from '@chakra-ui/react'
import { ReactNode } from '@tanstack/react-router'
import { ArrowIconLeftBSvg } from './icons/arrow-icon-left-b.svg'
import { ArrowIconRightTSvg } from './icons/arrow-icon-right-t.svg'
import { ArrowIconLeftTSvg } from './icons/arrow-icon-left-t.svg'
import { ArrowIconRightBSvg } from './icons/arrow-icon-right-b.svg'

const BgWithIcon = ({ children }: { children: ReactNode }) => {
  return (
    <Box position="relative">
      <Flex justify="space-between" position="absolute" top={0} w="100%">
        <Icon as={ArrowIconLeftTSvg} w="3.5px" h="3.5px" />
        <Icon as={ArrowIconRightTSvg} w="3.5px" h="3.5px" />
      </Flex>
      <Flex justify="space-between" position="absolute" bottom={0} w="100%">
        <Icon as={ArrowIconLeftBSvg} w="3.5px" h="3.5px" />
        <Icon as={ArrowIconRightBSvg} w="3.5px" h="3.5px" />
      </Flex>
      <Box p="8.5px">{children}</Box>
    </Box>
  )
}

export default BgWithIcon

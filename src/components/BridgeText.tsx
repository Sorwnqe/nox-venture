import { Box, Flex, Text } from '@chakra-ui/react'
import { ElementType } from 'react'

const BridgeText = ({
  text = '',
  as,
  ...props
}: {
  text: string
  as?: ElementType
  className?: string
}) => {
  return (
    <Flex alignItems="center" gap="8px" as={as} {...props}>
      <Box bg="#A7A7A7" w="6px" h="6px" className="bridge-sq"></Box>
      <Text fontFamily="Space Mono" color="#A7A7A7" className="bridge-t" as="span">
        {text}
      </Text>
    </Flex>
  )
}

export default BridgeText

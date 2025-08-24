import { Text, TextProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

const Title = ({ children, ...props }: { children: ReactNode } & TextProps) => {
  return (
    <Text
      as={'h3'}
      fontSize={'32px'}
      fontWeight={'400'}
      letterSpacing="4px"
      color={'rgba(255, 255, 255, 0.8)'}
      {...props}
    >
      {children}
    </Text>
  )
}
export default Title

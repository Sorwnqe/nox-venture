import { Heading, TextProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

const Title = ({ children, ...props }: { children: ReactNode } & TextProps) => {
  return (
    <Heading
      as={'h3'}
      fontSize={{ base: '28px', md: '32px' }}
      fontWeight={'400'}
      letterSpacing="4px"
      color={'rgba(255, 255, 255, 0.8)'}
      {...props}
    >
      {children}
    </Heading>
  )
}
export default Title

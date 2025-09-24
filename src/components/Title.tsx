import { Heading, TextProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

const Title = ({ children, ...props }: { children: ReactNode } & TextProps) => {
  return (
    <Heading
      as={'h3'}
      fontSize={{ base: '20px', md: '32px' }}
      fontWeight="300"
      fontFamily="Brandon"
      letterSpacing="2px"
      color={'#636363'}
      {...props}
    >
      {children}
    </Heading>
  )
}
export default Title

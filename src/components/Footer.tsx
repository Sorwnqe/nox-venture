import { FC } from 'react'
import { Center, Flex, Link, Icon } from '@chakra-ui/react'
import { jumpAnchor } from '../utils'
import { motion } from 'framer-motion'
import { LogoSvg } from './icons/logo.svg'
import { TwitterIconSvg } from './icons/twitter.svg'
import { socials } from '../env'

const LinkItem = ({ children, onClick }: { children: string; onClick: () => void }) => (
  <Link
    onClick={onClick}
    _hover={{
      color: '#fff',
      transition: '0.4s all ease-in-out',
      transform: 'scale(1.2)',
    }}
  >
    {children}
  </Link>
)

export const Footer: FC = () => {
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 },
      }}
      id="CONTACT"
    >
      <Center w="100%" pt="123px" pb="223px" fontFamily="Space Mono" color="#A7A7A7">
        <Flex w="100%" maxW="1280px" px="20px" justify="space-between">
          <Icon as={LogoSvg} w="103px" h="103px" />

          <Flex direction="column" gap="24px">
            <LinkItem onClick={() => jumpAnchor('ABOUT')}>ABOUT US</LinkItem>
            <LinkItem onClick={() => jumpAnchor('SERVICE')}>SERVICE</LinkItem>
            <LinkItem onClick={() => jumpAnchor('PORTFOLIO')}>PORTFOLIO</LinkItem>
            <LinkItem onClick={() => jumpAnchor('CONTACT')}>CONTACT US</LinkItem>
            <a href={socials.twitter} target="_blank">
              <Icon
                as={TwitterIconSvg}
                width="24px"
                height="24px"
                _hover={{
                  cursor: 'pointer',
                  color: '#fff',
                  transition: '0.4s all ease-in-out',
                  transform: 'scale(1.2)',
                }}
              />
            </a>
          </Flex>
        </Flex>
      </Center>
    </motion.div>
  )
}

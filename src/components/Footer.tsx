import { FC } from 'react'
import { Center, Flex, Link, Icon, Box, useBreakpointValue } from '@chakra-ui/react'
import { jumpAnchor } from '../utils'
import { motion } from 'framer-motion'
import { TwitterIconSvg } from './icons/twitter.svg'
import { socials } from '../env'
import { EmailIconSvg } from './icons/email.svg'
import UnicornScene from 'unicornstudio-react'
import useIsMobile from '../hooks/useIsMobile'

const LinkItem = ({ children, onClick }: { children: string; onClick: () => void }) => {
  const isMobile = useIsMobile()
  return (
    <Link
      onClick={onClick}
      _hover={{
        color: '#fff',
        transition: isMobile ? '' : '0.4s all ease-in-out',
        transform: isMobile ? '' : 'scale(1.2)',
      }}
    >
      {children}
    </Link>
  )
}

export const Footer: FC = () => {
  const containerH = useBreakpointValue({ base: 200, md: 300 })!
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
      <Center w="100%" pt="123px" pb="20px" fontFamily="Space Mono" color="#A7A7A7">
        <Flex
          w="100%"
          maxW="1480px"
          px={{ base: '20px', md: '80px' }}
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          gap="20px"
        >
          <Flex gap={{ base: '12px', md: '24px' }} direction={{ base: 'column', md: 'row' }}>
            <LinkItem onClick={() => jumpAnchor('ABOUT')}>ABOUT US</LinkItem>
            <LinkItem onClick={() => jumpAnchor('SERVICES')}>SERVICES</LinkItem>
            <LinkItem onClick={() => jumpAnchor('PORTFOLIO')}>PORTFOLIO</LinkItem>
            <LinkItem onClick={() => jumpAnchor('CONTACT')}>CONTACT US</LinkItem>
          </Flex>
          <Flex alignItems="center" gap="12px">
            <a href={socials.twitter} target="_blank">
              <Icon
                as={EmailIconSvg}
                width="32px"
                height="28px"
                _hover={{
                  cursor: 'pointer',
                  color: '#fff',
                  transition: '0.4s all ease-in-out',
                  transform: 'scale(1.2)',
                }}
              />
            </a>
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
      <Box position="relative" w="100%" h={containerH} opacity={0.6}>
        <UnicornScene jsonFilePath="/footer.json" width="100%" height="100%" dpi={2} />
      </Box>
    </motion.div>
  )
}

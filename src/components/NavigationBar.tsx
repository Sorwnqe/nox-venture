import { FC, useState } from 'react'
import {
  Box,
  Center,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
  Image,
} from '@chakra-ui/react'
import { Link, useRouter } from '@tanstack/react-router'
import BridgeText from './BridgeText'
import { ArrowIconSvg } from './icons/arrow-icon.svg'
import { LogoTextSvg } from './icons/logo-text.svg'
import { TwitterIconSvg } from './icons/twitter.svg'
import BgWithIcon from './BgWithIcon'
import ScrambledText from './ScrambledText'
import TargetCursor from './TargetCursor'
import { jumpAnchor } from '../utils'
import { socials } from '../env'

const Item = ({ children, ...props }: MenuItemProps) => {
  return (
    <MenuItem
      className="menu-item cursor-target"
      bg="#282828"
      borderBottom="0.5px dashed #8A8A8A"
      borderRadius="2px"
      px="8px"
      py="8px"
      mb="12px"
      _hover={{
        bg: '#8A8A8A',
        '.bridge-t': {
          color: '#fff',
        },
        '.bridge-sq': {
          bg: '#fff',
        },
        transition: '1s all',
        '.arrow-icon': {
          display: 'block',
        },
      }}
      {...props}
    >
      <Flex justify="space-between" w="100%" alignItems="center">
        {children}
        <Icon as={ArrowIconSvg} w="12px" h="12px" className="arrow-icon" display="none" />
      </Flex>
    </MenuItem>
  )
}

export const NavigationBar: FC = () => {
  const [showCursor, setShowCursor] = useState<boolean>()
  const { history } = useRouter()
  const router = history.location.pathname

  return (
    <Center as="nav" className={router === '/' ? '' : 'black'} w="100%">
      {showCursor && <TargetCursor spinDuration={0} hideDefaultCursor={false} />}
      <Flex justify="space-around" w="100%" maxW="1800px" px="20px" align="center" h="60px">
        <Menu onOpen={() => setShowCursor(true)} onClose={() => setShowCursor(false)}>
          <MenuButton>
            <BridgeText text="MENU" />
          </MenuButton>
          <MenuList bg="#282828" p="8px" w="320px">
            <BgWithIcon>
              <Item onClick={() => jumpAnchor('ABOUT')}>
                <ScrambledText>
                  <BridgeText text="ABOUT US" />
                </ScrambledText>
              </Item>
              <Item onClick={() => jumpAnchor('SERVICES')}>
                <ScrambledText>
                  <BridgeText text="SERVICES" />
                </ScrambledText>
              </Item>
              <Item onClick={() => jumpAnchor('PORTFOLIO')}>
                <ScrambledText>
                  <BridgeText text="PORTFOLIO" />
                </ScrambledText>
              </Item>
              <Item onClick={() => jumpAnchor('CONTACT')}>
                <ScrambledText>
                  <BridgeText text="CONTACT" />
                </ScrambledText>
              </Item>
              <Box
                as="a"
                bg="none"
                p={0}
                color="#999999"
                cursor="pointer"
                href={socials.twitter}
                _hover={{
                  color: '#fff',
                  '.x-icon': {
                    transition: '0.4s transform ease-in-out',
                    transform: 'scale(1.2)',
                  },
                }}
              >
                <Icon
                  as={TwitterIconSvg}
                  w="16.5px"
                  h="16.5px"
                  mt="15px"
                  mb="20px"
                  ml="22px"
                  className="x-icon"
                />
              </Box>
              <Box h="123px" mb="8.5px" bg="#000">
                <Image src="/images/logo-with-bg.png" w="100%" h="100%" />
              </Box>
            </BgWithIcon>
          </MenuList>
        </Menu>
        <Box as={Link} to="/">
          <Icon as={LogoTextSvg} w="155px" h="60px" />
        </Box>
        <BridgeText text="CONTACT US" className="cursor-target" />
      </Flex>
    </Center>
  )
}

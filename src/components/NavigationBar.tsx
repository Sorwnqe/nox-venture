import { FC, useMemo, useState } from 'react'
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
  useToast,
} from '@chakra-ui/react'
import { Link, useRouter } from '@tanstack/react-router'
import BridgeText from './BridgeText'
import { ArrowIconSvg } from './icons/arrow-icon.svg'
import { TwitterIconSvg } from './icons/twitter.svg'
import BgWithIcon from './BgWithIcon'
import ScrambledText from './ScrambledText'
import TargetCursor from './TargetCursor'
import { jumpAnchor } from '../utils'
import { socials } from '../env'
import { LogoTextSvg } from './icons/logo-text.svg'
import EmailService from '../utils/sendEmail'

const Item = ({ children, ...props }: MenuItemProps) => {
  return (
    <MenuItem
      className="menu-item cursor-target"
      bg="unset"
      borderBottom="0.5px dashed #8A8A8A"
      borderRadius="2px"
      px="8px"
      py="8px"
      mb="12px"
      _hover={{
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
  const toaster = useToast()
  const [showCursor, setShowCursor] = useState<boolean>()
  const [isOpen, setIsOpen] = useState<boolean>()
  const { history } = useRouter()
  const router = useMemo(() => history.location.pathname, [history])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    info: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const copyEmail = async () => {
    const res = await EmailService.sendContactEmailSecure(formData)
    if (!res.success) {
      toaster({
        title: 'Error',
        description: res.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom',
      })
      return
    }
  }

  const handleSubmit = async () => {
    if (isSubmitting) return

    setIsSubmitting(true)
    copyEmail()
    setIsSubmitting(false)
  }

  return (
    <Center
      as="nav"
      className={router === '/' ? '' : 'black'}
      w="100%"
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      {showCursor && <TargetCursor spinDuration={0} hideDefaultCursor={false} />}
      <Flex justify="space-between" w="100%" maxW="1280px" px="20px" align="center" h="60px">
        <Menu
          onOpen={() => {
            setShowCursor(true)
            setIsOpen(true)
          }}
          onClose={() => {
            setShowCursor(false)
            setIsOpen(false)
          }}
        >
          <MenuButton className="cursor-target">
            <BridgeText text="MENU" />
          </MenuButton>
          <MenuList bg="rgba(20, 20, 20, 0.5)" backdropFilter="blur(24px)" p="20px 8px" w="320px">
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
              <Box h="123px" mb="10px" bg="#000">
                {isOpen && (
                  <video
                    src="/menu.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  ></video>
                )}
              </Box>
            </BgWithIcon>
          </MenuList>
        </Menu>
        <Box as={Link} to="/">
          <Icon as={LogoTextSvg} w="155px" h="60px" />
        </Box>

        <Menu
          onOpen={() => {
            setShowCursor(false)
            setIsOpen(true)
          }}
          onClose={() => {
            setShowCursor(false)
            setIsOpen(false)
          }}
        >
          <MenuButton className="cursor-target">
            <BridgeText text="CONTACT US" />
          </MenuButton>
          <MenuList
            bg="rgba(20, 20, 20, 0.5)"
            backdropFilter="blur(24px)"
            p="20px 8px"
            w="320px"
            fontFamily="Space Mono"
            onMouseEnter={() => setShowCursor(false)}
          >
            <Box bg="unset" px="8px" py="6px">
              <Input
                placeholder="Your name"
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </Box>
            <Box bg="unset" px="8px" py="6px">
              <Input
                placeholder="Your email"
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </Box>
            <Box bg="unset" px="8px" py="6px">
              <Input
                placeholder="More info"
                onChange={(e) => handleInputChange('info', e.target.value)}
              />
            </Box>
            <Box bg="unset" px="8px" py="6px" mt="8px">
              <Button bg="#000" w="100%" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
            <Box mt="12px" h="123px" mb="10px" mx="8px" bg="#000">
              {isOpen && (
                <video
                  src="/menu.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                ></video>
              )}
            </Box>
          </MenuList>
        </Menu>
      </Flex>
    </Center>
  )
}

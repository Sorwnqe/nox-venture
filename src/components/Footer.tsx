import { FC, useState } from 'react'
import {
  Center,
  Flex,
  Link,
  Icon,
  Box,
  useBreakpointValue,
  Input,
  Button,
  useToast,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
} from '@chakra-ui/react'
import { jumpAnchor } from '../utils'
import { motion } from 'framer-motion'
import { TwitterIconSvg } from './icons/twitter.svg'
import { socials } from '../env'
import { EmailIconSvg } from './icons/email.svg'
import UnicornScene from 'unicornstudio-react'
import useIsMobile from '../hooks/useIsMobile'
import { LogoTextSvg } from './icons/logo-text.svg'
import EmailService from '../utils/sendEmail'
import { ReactNode } from '@tanstack/react-router'
import BridgeText from './BridgeText'
import BgWithIcon from './BgWithIcon'

const LinkItem = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => {
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
  const toaster = useToast()
  const containerH = useBreakpointValue({ base: 200, md: 300 })!
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState<boolean>(false)
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
      <Center
        w="100%"
        pt="123px"
        pb={{ base: '100px', md: '20px' }}
        fontFamily="Space Mono"
        color="#A7A7A7"
      >
        <Flex
          w="100%"
          maxW="1480px"
          px={{ base: '20px', md: '80px' }}
          justify="space-between"
          direction={{ base: 'row-reverse', md: 'row' }}
          gap="20px"
        >
          <Flex gap={{ base: '12px', md: '24px' }} direction={{ base: 'column', md: 'row' }}>
            <LinkItem onClick={() => jumpAnchor('ABOUT')}>ABOUT US</LinkItem>
            <LinkItem onClick={() => jumpAnchor('SERVICES')}>SERVICES</LinkItem>
            <LinkItem onClick={() => jumpAnchor('PORTFOLIO')}>PORTFOLIO</LinkItem>
            <LinkItem onClick={() => setIsOpen(true)}>CONTACT US</LinkItem>
          </Flex>
          <Box>
            {isMobile && <Icon as={LogoTextSvg} h="60px" w="150px" color="#fff" />}
            <Flex alignItems="center" gap="12px" mt="20px">
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
          </Box>
        </Flex>
      </Center>
      {!isMobile && (
        <Box position="relative" w="100%" h={containerH} opacity={0.6}>
          <UnicornScene jsonFilePath="/footer.json" width="100%" height="100%" dpi={2} />
        </Box>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered>
        <ModalOverlay />
        <ModalContent
          bg="rgba(20, 20, 20, 0.5)"
          backdropFilter="blur(24px)"
          p="20px 8px"
          fontFamily="Space Mono"
        >
          <BgWithIcon>
            <ModalHeader>
              <BridgeText text="Contact Us" fontWeight="400" fontSize="16px" />
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <Flex pb={4} justify="space-between" align="center" gap={2} opacity={0.5}>
                {Array.from({ length: isMobile ? 28 : 38 }).map((_, i) => (
                  <Box key={i} w="5px" h="1px" bg="#A7A7A7" />
                ))}
              </Flex>
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
            </ModalBody>
          </BgWithIcon>
        </ModalContent>
      </Modal>
    </motion.div>
  )
}

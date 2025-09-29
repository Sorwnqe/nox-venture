import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NavigationBar } from '../components/NavigationBar.tsx'
import { Footer } from '../components/Footer.tsx'
import { Box, Flex } from '@chakra-ui/react'
import UnicornScene from 'unicornstudio-react'

export const Route = createRootRoute({
  component: () => (
    <>
      <Flex as="main" direction="column" position="relative" zIndex={1}>
        <Box
          className="absolute w-full left-0 z-[-1] opacity-[0.7]"
          h={{ base: '40vh', md: '100vh' }}
          top={{ base: '0', md: '-0' }}
          transform={{ base: 'translateY(60%)', md: 'unset' }}
        >
          <UnicornScene jsonFilePath="/motion.json" width="100%" height="100%" />
        </Box>
        <NavigationBar />
        <Outlet />
        <Footer />
        {/* <TanStackRouterDevtools /> */}
      </Flex>
    </>
  ),
})

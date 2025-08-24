import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NavigationBar } from '../components/NavigationBar.tsx'
import { Footer } from '../components/Footer.tsx'
import { Flex } from '@chakra-ui/react'

export const Route = createRootRoute({
  component: () => (
    <>
      <Flex as="main" direction="column" position="relative" zIndex={1}>
        <NavigationBar />
        <Outlet />
        <Footer />
        {/* <TanStackRouterDevtools /> */}
      </Flex>
    </>
  ),
})

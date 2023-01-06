import { Container, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import ToggleSwitch from './ToggleSwitch'

function Navbar() {
  return (
    <>
      <Stack direction={['column', 'row']} py={5} justifyContent="space-between" alignItems='center'>
        <Heading fontSize={{base: '4xl', lg: '5xl'}}>Weather App</Heading>
        <ToggleSwitch />
      </Stack>
    </>
  )
}

export default Navbar

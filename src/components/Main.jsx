import { Container, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

function Main() {
  return (
    <>
      <h1> Main content</h1>
      <Icon as={IoSearchSharp} w={4} h={4} />
      <Text flex={1} textAlign="left" ml={3} color="gray.400">
        Search for city
      </Text>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quidem eligendi
        nemo, amet libero pariatur corrupti dolore culpa dolor voluptas itaque ipsum
        sit recusandae error nesciunt similique perspiciatis quisquam facilis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Possimus facere voluptas
        nostrum cum excepturi, quod ipsam rem nobis sunt corrupti! Dignissimos sint
        harum ut molestiae sit laudantium consequuntur earum debitis.
      </Text>
      <p></p>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quidem eligendi
        nemo, amet libero pariatur corrupti dolore culpa dolor voluptas itaque ipsum
        sit recusandae error nesciunt similique perspiciatis quisquam facilis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Possimus facere voluptas
        nostrum cum excepturi, quod ipsam rem nobis sunt corrupti! Dignissimos sint
        harum ut molestiae sit laudantium consequuntur earum debitis.
      </Text>
    </>
  )
}

export default Main

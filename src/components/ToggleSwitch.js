import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5'

const ToggleSwitch = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box>
      <IconButton
        aria-label="toggle theme"
        colorScheme={useColorModeValue('purple', 'orange')}
        variant="solid"
        icon={useColorModeValue(<IoSunnySharp />, <IoMoonSharp />)}
        onClick={toggleColorMode}
      />
    </Box>
  )
}

export default ToggleSwitch

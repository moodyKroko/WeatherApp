import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5'

import './topbar.css'

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false)
  const { toggleColorMode } = useColorMode()

  const switchColorMode = () => {
    setIsOn(!isOn)
    toggleColorMode()
  }

  return (
    <Box
      className="switch"
      data-ison={isOn}
      onClick={switchColorMode}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 750, damping: 40 }}
      >
        <IconButton
          size="sm"
          aria-label="toggle theme"
          isRound
          colorScheme={useColorModeValue('purple', 'orange')}
          variant="solid"
          icon={useColorModeValue(<IoSunnySharp />, <IoMoonSharp />)}
        />
      </motion.div>
    </Box>
  )
}

export default ToggleSwitch

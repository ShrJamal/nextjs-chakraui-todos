import React from 'react'
import {
  Box,
  Button,
  Circle,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Circle
        ml="20px"
        p="3"
        bg={useColorModeValue('gray.200', 'gray.500')}
        onClick={toggleColorMode}
        cursor="pointer"
      >
        {colorMode === 'light' ? <FaSun /> : <FaMoon />}
      </Circle>
    </Box>
  )
}

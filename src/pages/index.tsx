import { Heading, HStack, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import AddTodo from '~/components/AddTodo'
import ThemeToggler from '~/components/ThemeToggler'
import TodosList from '~/components/TodosList'

export default function TodosPage() {
  return (
    <VStack mx="auto" my="8">
      <HStack>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="9xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          Todos
        </Heading>
        <ThemeToggler />
      </HStack>
      <TodosList />
      <AddTodo />
    </VStack>
  )
}

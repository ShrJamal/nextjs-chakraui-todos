import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import AddTodo from '~/components/AddTodo'
import TodosList from '~/components/TodosList'

export default function TodosPage() {
  return (
    <VStack mx="auto" my="8">
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Todos
      </Heading>
      <TodosList />
      <AddTodo />
    </VStack>
  )
}

import { Badge, Box, Divider, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useTodos } from '../hooks'
import TodoItem from './TodoItem'

export default function TodosList() {
  const { data: todos, isLoading, error } = useTodos()

  return (
    <Box
      w="100%"
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      p="4"
      borderRadius="lg"
      borderColor="gray.100"
      borderWidth="1px"
      justify="center"
      align="center"
    >
      {todos && todos.length ? (
        todos.map((todo, i) => (
          <VStack key={todo.id} align="stretch">
            <TodoItem todo={todo} />
            {i !== todos.length - 1 && <Divider />}
          </VStack>
        ))
      ) : isLoading && !error ? (
        <Box>Loading...</Box>
      ) : (
        <Badge
          color="green"
          px={4}
          py={2}
          mx="auto"
          justify="center"
          alignItems="center"
        >
          {error ? (
            <Text color="red.500">
              {error instanceof Error ? error.message : 'Unknown Error'}
            </Text>
          ) : (
            <Text>No Todos</Text>
          )}
        </Badge>
      )}
    </Box>
  )
}

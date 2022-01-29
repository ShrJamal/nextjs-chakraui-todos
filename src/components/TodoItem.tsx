import { useCallback, useState } from 'react'
import { HStack, IconButton, Text } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

import { useCompleteTodo, useDeleteTodo } from '../hooks'
import { Todo } from '@prisma/client'

export default function TodoItem({ todo }: { todo: Todo }) {
  const { mutate: deleteTodo } = useDeleteTodo()
  const [completed, setCompleted] = useState(todo.completed)
  const { mutate: toggleComplete } = useCompleteTodo()
  const handleComplete = useCallback(() => {
    toggleComplete({ id: todo.id, completed: !completed })
    setCompleted(!completed)
  }, [completed, todo, toggleComplete])

  return (
    <HStack my="2">
      <Text
        textDecoration={completed ? 'line-through' : ''}
        onClick={() => handleComplete()}
        cursor="pointer"
        flex="1"
        align="start"
      >
        {todo.content}
      </Text>
      <IconButton
        {...{ 'aria-label': 'Delete' }}
        icon={<FaTrash />}
        onClick={() => deleteTodo(todo.id)}
        isRound={true}
      />
    </HStack>
  )
}

import {
  Button,
  HStack,
  Input,
  Spacer,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useAddTodo } from '../hooks'

export default function AddTodo() {
  const [content, setContent] = useState('')
  const { mutate: addTodo, isLoading, error } = useAddTodo()
  const toast = useToast()
  function handleSubmit() {
    if (!content) {
      toast({
        title: 'Error',
        description: 'No content',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }
    addTodo(content)

    setContent('')
  }
  return (
    <VStack py="10">
      <HStack>
        <Input
          variant="filled"
          placeholder="Add Todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Spacer />
        <Button
          colorScheme="red"
          px="8"
          onClick={() => handleSubmit()}
          disabled={isLoading}
        >
          Add
        </Button>
      </HStack>
      {error && (
        <Text color="tomato">
          {error instanceof Error ? error.message : 'Something went wrong'}
        </Text>
      )}
    </VStack>
  )
}

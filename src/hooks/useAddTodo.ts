import { useMutation } from 'react-query'
import { reactQuery } from '.'

export function useAddTodo() {
  return useMutation(async (content: string) => {
    await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ content }),
    })
    reactQuery.invalidateQueries('todos')
  })
}

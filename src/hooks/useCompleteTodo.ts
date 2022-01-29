import { useMutation } from 'react-query'

export function useCompleteTodo() {
  return useMutation(
    async ({ id, completed }: { id: string; completed: boolean }) => {
      return fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed }),
      })
    },
  )
}

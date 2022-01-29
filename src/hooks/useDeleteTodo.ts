import { useMutation } from 'react-query'
import { reactQuery } from '.'

export function useDeleteTodo() {
  return useMutation(async (id: string) => {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
    reactQuery.invalidateQueries('todos')
  })
}

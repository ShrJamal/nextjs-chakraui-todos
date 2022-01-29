import type { Todo } from '@prisma/client'
import { useQuery } from 'react-query'

export function useTodos() {
  return useQuery('todos', async () => {
    const res = await fetch('/api/todos').then((res) => res.json())
    console.log('Fetch todos', res)

    return res as Todo[]
  })
}

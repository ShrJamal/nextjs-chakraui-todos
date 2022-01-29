import { PrismaClient } from '@prisma/client'
import { QueryClient } from 'react-query'
export * from './useTodos'
export * from './useCompleteTodo'
export * from './useAddTodo'
export * from './useDeleteTodo'

export const reactQuery = new QueryClient()

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const prisma = new PrismaClient()
  if (req.method === 'GET') {
    const todos = await prisma.todo.findMany()
    res.status(200).json(todos)
  } else if (req.method === 'POST') {
    const content = JSON.parse(req.body)['content'] as string
    if (!content) {
      res.status(400).end('Content is required')
      return
    }

    const todo = await prisma.todo
      .create({
        data: {
          content,
        },
      })
      .catch((e) => res.status(400).end(e.message))
    res.status(200).json(todo)
  }
}

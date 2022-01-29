import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const id = req.query.pid as string

  const prisma = new PrismaClient()
  if (req.method === 'GET') {
    const todo = await prisma.todo.findUnique({
      where: {
        id,
      },
    })
    if (!todo) {
      res.status(404).end('Todo Not found')
      return
    }
    res.status(200).json(todo)
  } else if (req.method === 'PATCH') {
    const completed = JSON.parse(req.body).completed as boolean

    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        completed,
      },
    })
    res.status(200).end()
  } else if (req.method === 'DELETE') {
    await prisma.todo.delete({
      where: {
        id,
      },
    })
    res.status(200).end()
  }
}

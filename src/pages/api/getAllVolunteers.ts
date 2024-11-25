// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  try {
    const result = await prisma.gonullu.findMany()
    res.status(200).json(result);
  }
  catch (error) {
    console.log(error)
    await prisma.$disconnect();
    res.status(500).json({ error: 'failed to load data' })
  }
}

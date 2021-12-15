// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type Data = {
  name: string;
  age: string;
};

const prisma = new PrismaClient();

export default async function aboutHandler(req: NextApiRequest, res: NextApiResponse<Data|Data[]|null>) {
  const person = await prisma.person.findMany({
    where: {
      name: 'Maya',
    }
  })

  res.status(200).json(person);
}

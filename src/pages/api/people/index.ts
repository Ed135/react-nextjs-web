// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type Data = {
  name: string;
  age: string;
};

type Person = {
  name: string;
  age: string;
}

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data[]|null|Person>) {
  if (req.method === 'POST') {
    const post = await prisma.person.create({
      data: {
        name: 'Ed',
        age: '13',
      }
    })

    res.status(200).json(post);
  } else {
    const people = await prisma.person.findMany()

    res.status(200).json(people);
  }
}

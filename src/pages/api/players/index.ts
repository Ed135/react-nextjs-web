// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/superbaseClient'

type Data = {
  name: string;
  age: string;
};

type Person = {
  name: string;
  age: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const post = await supabase
      .from('players')
      .insert([
        req.body
      ])      

    res.status(200).json(post);
  } else {
    const players = await supabase
      .from('players')
      .select('name, age')

    res.status(200).json(players);
  }
}

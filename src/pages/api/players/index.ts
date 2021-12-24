// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/superbaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const createPlayer = await supabase
      .from('players')
      .insert([
        req.body
      ])      

    return res.status(200).json(createPlayer);
  }

  if (req.method === 'DELETE') {
    const deletePlayer = await supabase
      .from('players')
      .delete()
      .match(
        req.body
      )

    return res.status(200).json(deletePlayer)
  }

  const players = await supabase
    .from('players')
    .select('name, age')

  return res.status(200).json(players);
  
}

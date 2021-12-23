// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/superbaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const info = await supabase
    .from('players')
    .select('name, age')
    .single()

  res.status(200).json(info);
}

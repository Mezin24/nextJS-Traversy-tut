import { articles } from '../../../data';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  articles: Article[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ articles });
}

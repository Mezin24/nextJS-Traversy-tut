import { articles } from '../../../data';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  article?: Article;
  message?: string;
};

export default function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return res
      .status(404)
      .json({ message: `This article doesn't exist with id ${id}` });
  }
  res.status(200).json({ article });
}

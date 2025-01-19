import type { NextApiRequest, NextApiResponse } from 'next';
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(`console.log('a')`);
}

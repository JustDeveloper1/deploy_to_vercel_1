import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(
  request: Request,
) {
  return new Response(`
    console.log('a');
  `, {
    status: 200,
  });
}

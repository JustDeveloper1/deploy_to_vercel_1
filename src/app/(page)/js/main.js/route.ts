import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(
  request: Request,
) {
  return new Response(`
    alert('This website is w.i.p.!');
  `, {
    status: 200,
  });
}

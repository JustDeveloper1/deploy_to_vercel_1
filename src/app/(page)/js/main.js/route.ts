import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs/promises';

const filename = 'main'

async function getFileContent() {
    try {
        const content = await fs.readFile(`/js/${filename}.js/data.js`, 'utf8');
        return content;
    } catch (error) {
        console.error('Error reading file:', error);
        return false;
    }
}

export async function GET(
  request: Request,
) {
  const fileContent = await getFileContent();
  if (fileContent)
    return new Response(fileContent, {
      status: 200,
    });
  return new Response(null, {
    status: 404,
  });
}

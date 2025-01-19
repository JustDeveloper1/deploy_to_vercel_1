import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs/promises';

const filename = 'main'

async function getFileContent() {
    try {
        let content;
        await fs.readFile(`./src/js/${filename}.js`, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            content = data;
        });
        return content;
    } catch (error) {
        return false;
        console.error('Error reading file:', error);
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

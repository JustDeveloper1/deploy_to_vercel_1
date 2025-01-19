import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';

const filename = 'main'

async function getFileContent() {
    try {
        let content;
        fs.readFile(`../scripts/js/${filename}.js`, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            content = data;
        });
        return content;
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

const fileContent = getFileContent();

type ResponseData = {
  message: string
}

export function GET(
  request: Request,
) {
  if (fileContent)
    return new Response(fileContent, {
      status: 200,
    });
  return new Response('', {
    status: 404,
  });
}

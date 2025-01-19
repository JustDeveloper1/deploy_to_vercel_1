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
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Content-Type', 'application/javascript');
  if (fileContent) {
    res.status(200).send(fileContent);
  } else {
    res.status(404);
  }
}

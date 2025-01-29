/*

MIT License

Copyright (c) 2025 JustStudio. <https://juststudio.is-a.dev/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

async function getCode(id) {
  let __script__ = ``;
  const response = await fetch(`https://api.juststudio.is-a.dev/cs/${id}`);
  const code = 200;
  let data;
  const decodeHtml = (input) => {
      const textArea = document.createElement('textarea');
      textArea.innerHTML = input;
      return textArea.value;
  };
  if (response.status && response.status < 400 && response.status > 199) {
    data = await response.json();
    __script__ = decodeHtml(data.data.code);
  } else {
    code = response.status || 404;
  }

  return [__script__, code];
}
export async function GET(
  request
) {
  const url = request.url;
  const id = url.slice(25, -4);
  const [codeData, codeCode] = await getCode(id);

  if (!response.success)
    return Response.json(code, {
      status: 400,
    });
  
  return new Response(codeData, {
    status: codeCode,
  });
}

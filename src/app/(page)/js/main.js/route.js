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

const __script__ = `
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

const _just = {};

// SETTINGS //

_just.alertWIP = true;
_just.alertWIPtext = 'This website is w.i.p.!';
_just.useConsole = true;

//  SYSTEM  //

_just.theme = globalThis.localStorage.getItem('theme') || 'dark';
_just.vscme = globalThis.document.querySelector('.monaco-editor');
_just.data0 = _just.vscme.parentElement.parentElement.parentElement.parentElement.parentElement;
_just.setPaddingTop = (__element__, __value__) => {
    try {
        __element__.style.paddingTop = ${atob('YA==')}${'${__value__}'}px${atob('YA==')};
        return true;
    } catch (__error__) {
        if (_just.useConsole) {
            console.warn(__error__);
        }
        return false;
    }
}
if (_just.theme == 'dark') {
    _just.setPaddingTop(_just.vscme, 15);
}
_just.setPaddingTop(_just.data0, 15);
if (_just.alertWIP) {
    try {
        alert(_just.alertWIPtext);
    } catch (__error__) {
        if (_just.useConsole) {
            console.warn(__error__);
        }
    }
}
`

export async function GET(
  request
) {
  return new Response(__script__, {
    status: 200,
  });
}

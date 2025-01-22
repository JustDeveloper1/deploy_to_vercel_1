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

const __just = {};

const __just.copyrightTextStyles = ${atob('YA==')}
  fill: rgba(228, 228, 228, 0.75);
  left: 0%;
  color: rgba(228, 228, 228, 0.75);
  width: 100%;
  bottom: 5px;
  height: auto;
  position: fixed;
  font-size: 16px;
  font-style: normal;
  text-align: center;
  font-family: 'Rubik';
  font-weight: 400;
  display: block;
  z-index: 10001;
${atob('YA==')};
const __just.copyrightTextLink = ${atob('YA==')}https://github.com/JustStudio7/CodeShare/blob/main/LICENSE${atob('YA==')}
const __just.currentYear = new Date().getFullYear();
let __just.copyrightText = ${atob('YA==')}
    <span style="${'${__just.copyrightTextStyles}'}">
        <a href="${'${__just.copyrightTextLink}'}" target="_blank">
            <span style="opacity: 0.5;text-decoration: underline;text-decoration-color: rgba(255,255,255,0.33);" class="txt12" id="copyrightfootertext">© 2025-${'${__just.currentYear}'} JustStudio.</span>
        </a>
        <br>
    </span>
${atob('YA==')}
if (__just.currentYear < 2026) {
    __just.copyrightText = ${atob('YA==')}
        <span style="${'${__just.copyrightTextStyles}'}">
            <a href="${'${__just.copyrightTextLink}'}" target="_blank">
                <span style="opacity: 0.5;text-decoration: underline;text-decoration-color: rgba(255,255,255,0.33);" class="txt12" id="copyrightfootertext">© 2025 JustStudio.</span>
            </a>
            <br>
        </span>
    ${atob('YA==')}
}
document.body.insertAdjacentHTML('beforeend', __just.copyrightText);

const __just.UploadCode = (__text__) => {
  "use strict";
  const __just = {};
  const __just.monacoEditorData = globalThis.monaco.editor.getEditors()[0];
  let __just.__upload__code__data__ = '';
  let __just.pre__upload__code__data__ = {};
  __just.pre__upload__code__data__.code = __just.monacoEditorData.getValue();
  __just.pre__upload__code__data__.lang = __just.monacoEditorData.getModel().getLanguageIdAtPosition();
  if (__text__) {
    __just.pre__upload__code__data__.lang = 'text';
  } 
  __just.__upload__code__data__ = encodeURIComponent(JSON.stringify(__just.pre__upload__code__data__));
  setTimeout(() => {
    globalThis.window.location.href = ${atob('YA==')}https://juststudio.is-a.dev/account/action/codeshare?${'${__just.__upload__code__data__}'}${atob('YA==')};
  }, 500)
}

const __just.Publish = {}

const __just.Publish.Code = () => {
  __just.UploadCode(false);
}
const __just.Publish.Text = () => {
  __just.UploadCode(true);
}
const __just.Publish.Draft = () => {
  "use strict";
  const __just = {};
  const __just.monacoEditorData = globalThis.monaco.editor.getEditors()[0];
  let __just.__upload__code__data__ = '';
  let __just.pre__upload__code__data__ = {};
  __just.pre__upload__code__data__.code = __just.monacoEditorData.getValue();
  __just.pre__upload__code__data__.lang = __just.monacoEditorData.getModel().getLanguageIdAtPosition();
  __just.__upload__code__data__ = encodeURIComponent(JSON.stringify(__just.pre__upload__code__data__));
  localStorage.setItem('draft', __just.__upload__code__data__);
}
`

export async function GET(
  request
) {
  return new Response(__script__, {
    status: 200,
  });
}

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

const copyrightTextStyles = ${atob('YA==')}
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
const copyrightTextLink = ${atob('YA==')}https://github.com/JustStudio7/CodeShare/blob/main/LICENSE${atob('YA==')}
const currentYear = new Date().getFullYear();
let copyrightText = ${atob('YA==')}
    <span style="${'${copyrightTextStyles}'}">
        <a href="${'${copyrightTextLink}'}" target="_blank">
            <span style="opacity: 0.5;text-decoration: underline;text-decoration-color: rgba(255,255,255,0.33);" class="txt12" id="copyrightfootertext">© 2025-${'${currentYear}'} JustStudio.</span>
        </a>
        <br>
    </span>
${atob('YA==')}
if (currentYear < 2026) {
    copyrightText = ${atob('YA==')}
        <span style="${'${copyrightTextStyles}'}">
            <a href="${'${copyrightTextLink}'}" target="_blank">
                <span style="opacity: 0.5;text-decoration: underline;text-decoration-color: rgba(255,255,255,0.33);" class="txt12" id="copyrightfootertext">© 2025 JustStudio.</span>
            </a>
            <br>
        </span>
    ${atob('YA==')}
}
document.body.insertAdjacentHTML('beforeend', copyrightText);

const UploadCode = (__upload__code__data__) => {
  setTimeout(() => {
    window.location.href = ${atob('YA==')}https://juststudio.is-a.dev/account/action/codeshare?${'${__upload__code__data__}'}${atob('YA==')};
  }, 500)
}
  
const publishButton = document.getElementById('__just_publish').parentElement;
const textPublishButton = document.getElementById('__just_publish-txt');
const saveDraftButton = document.getElementById('__just_publish-draft');

const __upload__code__dat0__ = {
  code: '',
  lang: ''
};

function controlEditor() {
  const monacoEditor = monaco.editor.getEditors()[0];
  
  if (!monacoEditor) {
    setTimeout(controlEditor, 10);
    return;
  }

  function __code__updated__() {
    __upload__code__dat0__.code = monacoEditor.getValue();
    __upload__code__dat0__.lang = monacoEditor.getModel().getLanguageIdAtPosition();
  }
  __code__updated__();

  monacoEditor.onWillType(() => __code__updated());
  monacoEditor.onKeyDown(() => __code__updated());
  monacoEditor.onDropIntoEditor(() => __code__updated());
  monacoEditor.onDidPaste(() => __code__updated());
  monacoEditor.onContextMenu(() => __code__updated());
  monacoEditor.onDidChangeCursorPosition(() => __code__updated());
  monacoEditor.onDidChangeModelContent(() => __code__updated());
  monacoEditor.onDidChangeModelLanguage(() => __code__updated());

  publishButton.addEventListener('click', function() {
    UploadCode(encodeURIComponent(JSON.stringify(__upload__code__dat0__)));
  });
  textPublishButton.addEventListener('click', function() {
    __upload__code__dat0__.lang = 'text';
    UploadCode(encodeURIComponent(JSON.stringify(__upload__code__dat0__)));
  });
  saveDraftButton.addEventListener('click', function() {
    localStorage.setItem('draft', __upload__code__dat0__.code);
  });
}

controlEditor();
`

export async function GET(
  request
) {
  return new Response(__script__, {
    status: 200,
  });
}

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

// SETTINGS //

__just.hostname = 'codeshare.js.org';
__just.copyrightTextLink = ${atob('YA==')}https://github.com/JustStudio7/CodeShare/blob/main/LICENSE${atob('YA==')};

//  SYSTEM  //

__just.copyrightTextStyles = ${atob('YA==')}
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
__just.currentYear = new Date().getFullYear();
__just.copyrightText = ${atob('YA==')}
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

__just.UploadCode = (__text__) => {
  "use strict";
  const __just = {};
  __just.monacoEditorData = globalThis.monaco.editor.getEditors()[0];
  __just.__upload__code__data__ = '';
  __just.pre__upload__code__data__ = {};
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

__just.Publish = {}

__just.Publish.Code = () => {
  __just.UploadCode(false);
}
__just.Publish.Text = () => {
  __just.UploadCode(true);
}
__just.Publish.Draft = () => {
  "use strict";
  const __just = {};
  __just.monacoEditorData = globalThis.monaco.editor.getEditors()[0];
  __just.__upload__code__data__ = '';
  __just.pre__upload__code__data__ = {};
  __just.pre__upload__code__data__.code = __just.monacoEditorData.getValue();
  __just.pre__upload__code__data__.lang = __just.monacoEditorData.getModel().getLanguageIdAtPosition();
  __just.__upload__code__data__ = encodeURIComponent(JSON.stringify(__just.pre__upload__code__data__));
  localStorage.setItem('draft', __just.__upload__code__data__);
}

let terms_accepted = localStorage.getItem('d1');
function notify(icon, text, buttonText, id, blur, type) {
    "use strict";
    let notificsElement = globalThis.document.getElementById('notifications');
    let notificElement;
    if (!notificsElement) {
        globalThis.document.body.insertBefore(globalThis.document.createElement('div'), globalThis.document.getElementById('content')).id = 'notifications';
        notificsElement = globalThis.document.getElementById('notifications');
    }
    if (type && type == 'terms') {
        notificsElement.innerHTML = ${atob('YA==')}<span class="notification noHighlightEffect" id="txt45"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1437f3"><path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm0-240q-33 0-56.5-23.5T400-440v-320q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760v320q0 33-23.5 56.5T480-360Z"></path></svg>By using this service, you agree to the <a href="#" id="n_tl"> User Agreement</a>.<button id="${'${id}'}">I agree</button></span>${atob('YA==')};
        document.getElementById('n_tl').addEventListener("click", () => {
            const width = window.innerWidth * 0.75;const height = window.innerHeight * 0.75;const left = (window.innerWidth - width) / 2;const top = (window.innerHeight - height) / 2;window.open('https://juststudio.is-a.dev/terms?navbar=false', 'User Agreement', ${atob('YA==')}toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=${'${left}'},top=${'${top}'},width=${'${width}'},height=${'${height}'}${atob('YA==')});return false;
        })
        if (globalThis.localStorage.getItem('language') !== 'EN') {
            globalThis.localStorage.setItem('language-upd', '_');
        }
    } else {
        if (buttonText) {
            if (icon) {
                notificsElement.innerHTML = ${atob('YA==')}<span class="notification noHighlightEffect"><img href="${'${icon}'}"></img>${'${text}'}<button id="${'${id}'}">${'${buttonText}'}</button></span>${atob('YA==')};
            } else {
                notificsElement.innerHTML = ${atob('YA==')}<span class="notification noHighlightEffect">${'${text}'}<button id="${'${id}'}">${'${buttonText}'}</button></span>${atob('YA==')};
            }
        } else { 
            if (type == 'wifi') {
                notificsElement.innerHTML = ${atob('YA==')}<span class="notification noHighlightEffect" id="txt46"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1437f3"><path d="M762-84 414-434q-31 7-59.5 19T301-386q-21 14-46.5 14.5T212-389q-18-18-16.5-43.5T217-473q23-17 48.5-31t52.5-26l-90-90q-26 14-50.5 29.5T130-557q-20 16-45.5 16T42-559q-18-18-17-43t21-41q22-18 45-34.5t49-30.5l-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l679 679q12 12 12 28.5T819-84q-12 11-28.5 11.5T762-84Zm-282-36q-42 0-71-29.5T380-220q0-42 29-71t71-29q42 0 71 29t29 71q0 41-29 70.5T480-120Zm273-275q-16 16-37.5 15.5T678-396l-10-10-10-10-96-96q-13-13-5-27t28-9q45 11 85.5 31t75.5 47q18 14 20.5 36.5T753-395Zm165-164q-17 18-42 18.5T831-556q-72-59-161.5-91.5T480-680q-21 0-40.5 1.5T400-674q-25 4-45-10.5T331-724q-4-25 11-45t40-24q24-4 48.5-5.5T480-800q125 0 235.5 41.5T914-644q20 17 21 42t-17 43Z"/></svg>${'${text}'}</span>${atob('YA==')};
            } else if (icon) {
                notificsElement.innerHTML = ${atob('YA==')}<span class="notification noHighlightEffect"><img href="${'${icon}'}"></img>${'${text}'}</span>${atob('YA==')};
            } else {
                notificsElement.innerHTML = ${atob('YA==')}<span class="notification noHighlightEffect">${'${text}'}</span>${atob('YA==')};
            }
        }
    }
    notificElement = notificsElement.querySelector('.notification');
    setTimeout(() => {
        notificElement.classList.add('n-hover');
        setTimeout(() => {
            notificElement.classList.remove('n-hover');
        }, 1500);
    }, 1000)
    if (blur) {
        const elementsToBlur = ['content', 'accounts', ':r3:', 'clerk-components'];
        elementsToBlur.forEach(id => {
            const element = globalThis.document.getElementById(id);
            if (element) {
                element.style.filter = 'blur(8px)';
                element.style['-webkit-filter'] = 'blur(8px)';
                element.style['pointer-events'] = 'none';
            }
        });
        globalThis.document.getElementById('content').style.scale = '110%';
    }
    return notificElement;
}
function r_notific(notificElement, blur) {
    if (blur) {
        const elementsToBlur = ['content', 'accounts', ':r3:', 'clerk-components'];
        elementsToBlur.forEach(id => {
            const element = globalThis.document.getElementById(id);
            if (element) {
                element.style.filter = '';
                element.style['-webkit-filter'] = '';
                element.style['pointer-events'] = '';
            }
        });
        globalThis.document.getElementById('content').style.scale = '';
    }
    notificElement.style.opacity = '0';
    notificElement.style.translate = '-50% 30%';
    setTimeout(() => {
        try {
            notificElement.parentNode.removeChild(notificElement);
        } catch {
            notificElement.remove();
        }
        checkUserAgreement()
    }, 701)
}
function checkUserAgreement() {
    terms_accepted = localStorage.getItem('d1');
    if (!terms_accepted) {
        "use strict";
        const n_te_b_id = 'n_ta'
        let n_te = globalThis.notify(null,null,null,n_te_b_id,false,'terms');
        globalThis.document.getElementById(n_te_b_id).addEventListener("click", () => {
            globalThis.r_notific(n_te,false);
            globalThis.localStorage.setItem('d1', 'y');
        });
    }
}
checkUserAgreement()
let n_connection;
window.addEventListener('offline', function() {
    n_connection = notify(null, 'No Internet connection!', null, null, true, 'wifi');
});
window.addEventListener('online', function() {
    r_notific(n_connection, true);
});

try{document.getElementById('bannerText').parentElement.style['z-index'] = '0';}catch{}

if (window.location.hostname != __just.hostname) {
    window.location.hostname = __just.hostname;
}
`

export async function GET(
  request
) {
  return new Response(__script__, {
    status: 200,
  });
}

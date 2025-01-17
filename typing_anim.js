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

const handle = document.querySelector('.handle');
const parent = handle.parentElement;
const paragraph = parent.querySelector('p');
const text = paragraph.textContent;
let index = 0;

function typeText() {
    if (index < text.length) {
        paragraph.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeText, 100);
    } else {
        blinkHandle();
    }
}

function blinkHandle() {
    handle.style.opacity = '1';
    setInterval(() => {
        handle.style.opacity = handle.style.opacity === '1' ? '0' : '1';
    }, 500);
    moveHandle();
}

function moveHandle() {
    const textWidth = paragraph.offsetWidth;
    handle.style.transform = `translateX(${textWidth}px)`;
}

handle.style.opacity = '0';
typeText();

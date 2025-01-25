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

::-moz-selection {
  color: white;
  background: #6e3bf3;
}
::selection {
  color: white;
  background: #6e3bf3;
}

#notifications {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}
.notification {
  position: fixed;
  bottom: 30px;
  left: 50%;
  translate: -50% 0%;
  width: 600px;
  height: auto;
  background-color: white;
  z-index: 3;
  max-width: 85%;
  min-height: 40px;
  max-height: 80px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-content: center;
  align-items: center;
  transition: 700ms;
  font-family: 'Rubik';
  font-weight: 400;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  flex-wrap: wrap;
  text-wrap-style: stable;
  text-wrap-mode: wrap;
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-delay: 0s;
}
.notification img, .notification svg {
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  transition: 500ms;
}
.notification button {
  background-color: white;
  position: absolute;
  right: -1px;
  top: 0px;
  padding: 10px;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 20px;
  z-index: -1;
  cursor: pointer;
  translate: 0% -30%;
  transition: 500ms;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: rgba(0,0,0,0.15);
}
@property --gradient-angle{
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.notification:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(from var(--gradient-angle), #1437f3, #0075ff, #6e3bf3, #7400ff, #1437f3);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -3;
  border-radius: 20px;
  animation: 3s spin-gradient linear infinite;
  scale: 0.9;
  opacity: 0.9;
  transition: 500ms;
}
.notification:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  top: 50%;
  right: 50%;
  translate: 50% -50%;
  z-index: -2;
  border-radius: 20px;
}
.notification:hover, .n-hover {
  filter: drop-shadow(0px 0px 10px rgba(255,255,255,0.2));
  -webkit-filter: drop-shadow(0px 0px 10px rgba(255,255,255,0.2));
  button {
    translate: 0% -35%;
  }
  button:hover {
    box-shadow: 0px 0px 5px white;
  }
}
.notification:hover:before, .n-hover:before {
  scale: 1;
  filter: blur(1.5rem);
  transition: 1.5s;
}
.notification:hover:after, .n-hover:after {
  width: 100%;
  height: 95%;
  right: 0%;
  translate: 0% -50%;
  filter: blur(1px);
  -webkit-filter: blur(1px);
}
@keyframes spin-gradient{
  from{
    --gradient-angle: 0deg;
  }
  to{
    --gradient-angle: 360deg;
  }
}
.notification a {
  text-decoration: underline;
  text-decoration-color: rgba(0, 0, 0, 0.25);
  margin-left: -5px;
  margin-right: -10px;
  transition: 500ms;
}
.notification img:hover, .notification svg:hover {
  scale: 115%;
  background-color: transparent;
  filter: drop-shadow(0px 0px 2px #1437f3);
  -webkit-filter: drop-shadow(0px 0px 2px #1437f3);
}
.notification a:hover {
  text-decoration-color: rgba(0, 0, 0, 0.85);
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
  -webkit-filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
}
#content {
  transition: 700ms;
}
@media(max-width: 424px) {
  .notification img, .notification svg {
    display: none;
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

(()=>{"use strict";var e={208:(e,t,n)=>{n.r(t)},53:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(208);const s=l(n(482)),c=l(n(230)),o=l(n(199)),r=l(n(146)),i=l(n(488));(0,s.default)(),(0,c.default)(),(0,o.default)(),(0,r.default)(),(0,i.default)()},482:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(n(784));class c extends s.default{constructor(e){super(e,"div","container"),this.title=new s.default(this.element,"h1","title"),this.title.element.innerHTML="RSS Virtual Keyboard"}}t.default=()=>new c(document.body)},784:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t,n){this.element=document.createElement(t),this.element.className=n,e.append(this.element)}}},146:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(n(784));t.default=()=>{const e=new s.default(document.querySelector(".container"),"p","description"),t=new s.default(document.querySelector(".container"),"p","description");e.element.textContent="To switch language press Alt + Ctrl",t.element.textContent="The keyboard was created in the Windows operating system"}},199:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(n(566)),c=l(n(784));class o extends c.default{constructor(e){super(e,"div","keyboard"),s.default.forEach((e=>{this.row=new c.default(this.element,"div","row");for(let t=0;t<e.length;t++)this.btn=new c.default(this.row.element,"button",`${e[t].class}`),this.btn.element.textContent=`${e[t].key.en}`}))}}t.default=()=>new o(document.querySelector(".container"))},566:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=[[{key:{ru:"ё",en:"`"},shift:{ru:"Ё",en:"~"},code:"Backquote",class:"key Backquote"},{key:{ru:"1",en:"1"},shift:{ru:"!",en:"!"},code:"Digit1",class:"key Digit1"},{key:{ru:"2",en:"2"},shift:{ru:'"',en:"@"},code:"Digit2",class:"key Digit2"},{key:{ru:"3",en:"3"},shift:{ru:"№",en:"#"},code:"Digit3",class:"key Digit3"},{key:{ru:"4",en:"4"},shift:{ru:";",en:"$"},code:"Digit4",class:"key Digit4"},{key:{ru:"5",en:"5"},shift:{ru:"%",en:"%"},code:"Digit5",class:"key Digit5"},{key:{ru:"6",en:"6"},shift:{ru:":",en:"^"},code:"Digit6",class:"key Digit6"},{key:{ru:"7",en:"7"},shift:{ru:"?",en:"&"},code:"Digit7",class:"key Digit7"},{key:{ru:"8",en:"8"},shift:{ru:"*",en:"*"},code:"Digit8",class:"key Digit8"},{key:{ru:"9",en:"9"},shift:{ru:"(",en:"("},code:"Digit9",class:"key Digit9"},{key:{ru:"0",en:"0"},shift:{ru:")",en:")"},code:"Digit0",class:"key Digit0"},{key:{ru:"-",en:"-"},shift:{ru:"_",en:"_"},code:"Minus",class:"key Minus"},{key:{ru:"=",en:"="},shift:{ru:"+",en:"+"},code:"Equal",class:"key Equal"},{key:{ru:"Backspace",en:"Backspace"},code:"Backspace",class:"key Backspace",noType:!0}],[{key:{ru:"Tab",en:"Tab"},code:"Tab",class:"key Tab",noType:!0},{key:{ru:"й",en:"q"},shift:{ru:"Й",en:"Q"},code:"KeyQ",class:"key KeyQ"},{key:{ru:"ц",en:"w"},shift:{ru:"Ц",en:"W"},code:"KeyW",class:"key KeyW"},{key:{ru:"у",en:"e"},shift:{ru:"У",en:"E"},code:"KeyE",class:"key KeyE"},{key:{ru:"к",en:"r"},shift:{ru:"К",en:"R"},code:"KeyR",class:"key KeyR"},{key:{ru:"е",en:"t"},shift:{ru:"Е",en:"T"},code:"KeyT",class:"key KeyT"},{key:{ru:"н",en:"y"},shift:{ru:"Н",en:"Y"},code:"KeyY",class:"key KeyY"},{key:{ru:"г",en:"u"},shift:{ru:"Г",en:"U"},code:"KeyU",class:"key KeyU"},{key:{ru:"ш",en:"i"},shift:{ru:"Ш",en:"I"},code:"KeyI",class:"key KeyI"},{key:{ru:"щ",en:"o"},shift:{ru:"Щ",en:"O"},code:"KeyO",class:"key KeyO"},{key:{ru:"з",en:"p"},shift:{ru:"З",en:"P"},code:"KeyP",class:"key KeyP"},{key:{ru:"х",en:"["},shift:{ru:"Х",en:"{"},code:"BracketLeft",class:"key BracketLeft"},{key:{ru:"ъ",en:"]"},shift:{ru:"Ъ",en:"}"},code:"BracketRight",class:"key BracketRight"},{key:{ru:"\\",en:"\\"},shift:{ru:"|",en:"|"},code:"Backslash",class:"key Backslash"},{key:{ru:"Del",en:"Del"},code:"Delete",class:"key Delete"}],[{key:{ru:"CapsLock",en:"CapsLock"},code:"CapsLock",class:"key CapsLock",noType:!0},{key:{ru:"ф",en:"a"},shift:{ru:"Ф",en:"A"},code:"KeyA",class:"key KeyA"},{key:{ru:"ы",en:"s"},shift:{ru:"Ы",en:"S"},code:"KeyS",class:"key KeyS"},{key:{ru:"в",en:"d"},shift:{ru:"В",en:"D"},code:"KeyD",class:"key KeyD"},{key:{ru:"а",en:"f"},shift:{ru:"А",en:"F"},code:"KeyF",class:"key KeyF"},{key:{ru:"п",en:"g"},shift:{ru:"П",en:"G"},code:"KeyG",class:"key KeyG"},{key:{ru:"р",en:"h"},shift:{ru:"Р",en:"H"},code:"KeyH",class:"key KeyH"},{key:{ru:"о",en:"j"},shift:{ru:"О",en:"J"},code:"KeyJ",class:"key KeyJ"},{key:{ru:"л",en:"k"},shift:{ru:"Л",en:"K"},code:"KeyK",class:"key KeyK"},{key:{ru:"д",en:"l"},shift:{ru:"Д",en:"L"},code:"KeyL",class:"key KeyL"},{key:{ru:"ж",en:";"},shift:{ru:"Ж",en:":"},code:"Semicolon",class:"key Semicolon"},{key:{ru:"э",en:"'"},shift:{ru:"Э",en:'"'},code:"Quote",class:"key Quote"},{key:{ru:"Enter",en:"Enter"},code:"Enter",class:"key Enter",noType:!0}],[{key:{ru:"Shift",en:"Shift"},code:"ShiftLeft",class:"key ShiftLeft",noType:!0},{key:{ru:"я",en:"z"},shift:{ru:"Я",en:"Z"},code:"KeyZ",class:"key KeyZ"},{key:{ru:"ч",en:"x"},shift:{ru:"Ч",en:"X"},code:"KeyX",class:"key KeyX"},{key:{ru:"с",en:"c"},shift:{ru:"С",en:"C"},code:"KeyC",class:"key KeyC"},{key:{ru:"м",en:"v"},shift:{ru:"М",en:"V"},code:"KeyV",class:"key KeyV"},{key:{ru:"и",en:"b"},shift:{ru:"И",en:"B"},code:"KeyB",class:"key KeyB"},{key:{ru:"т",en:"n"},shift:{ru:"Т",en:"N"},code:"KeyN",class:"key KeyN"},{key:{ru:"ь",en:"m"},shift:{ru:"Ь",en:"M"},code:"KeyM",class:"key KeyM"},{key:{ru:"б",en:","},shift:{ru:"Б",en:"<"},code:"Comma",class:"key Comma"},{key:{ru:"ю",en:"."},shift:{ru:"Ю",en:">"},code:"Period",class:"key Period"},{key:{ru:".",en:"/"},shift:{ru:",",en:"?"},code:"Slash",class:"key Slash"},{key:{ru:"▲",en:"▲"},code:"ArrowUp",noType:!0,class:"key ArrowUp"},{key:{ru:"Shift",en:"Shift"},code:"ShiftRight",class:"key ShiftRight",noType:!0}],[{key:{ru:"Ctrl",en:"Ctrl"},code:"ControlLeft",class:"key ControlLeft",noType:!0},{key:{ru:"Win",en:"Win"},code:"MetaLeft",class:"key MetaLeft",noType:!0},{key:{ru:"Alt",en:"Alt"},code:"AltLeft",class:"key AltLeft",noType:!0},{key:{ru:" ",en:" "},code:"Space",class:"key Space"},{key:{ru:"Alt",en:"Alt"},code:"AltRight",class:"key AltRight",noType:!0},{key:{ru:"◄",en:"◄"},code:"ArrowLeft",noType:!0,class:"key ArrowLeft"},{key:{ru:"▼",en:"▼"},code:"ArrowDown",noType:!0,class:"key ArrowDown"},{key:{ru:"►",en:"►"},code:"ArrowRight",noType:!0,class:"key ArrowRight"},{key:{ru:"Ctrl",en:"Ctrl"},code:"ControlRight",class:"key ControlRight",noType:!0}]]},488:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(n(566));t.default=function(){const e=document.querySelector(".textarea"),t=document.querySelector(".CapsLock"),n=document.querySelectorAll(".row");let l,c,o=e.selectionStart;function r(){if(t.classList.contains("key_caps")){t.classList.remove("key_caps");for(let e=0;e<5;e+=1)for(let t=0;t<n[e].children.length;t+=1)1===n[e].children[t].textContent.length&&(n[e].children[t].innerHTML=n[e].children[t].innerHTML.toLowerCase());c=!1}else{t.classList.add("key_caps");for(let e=0;e<5;e+=1)for(let t=0;t<n[e].children.length;t+=1)1===n[e].children[t].textContent.length&&(n[e].children[t].innerHTML=n[e].children[t].innerHTML.toUpperCase());c=!0}}function i(){if(t.classList.contains("key_caps"))for(let e=0;e<5;e+=1)for(let t=0;t<n[e].children.length;t+=1)Object.keys(s.default[e][t]).includes("shift")&&1===n[e].children[t].textContent.length&&(n[e].children[t].innerHTML=s.default[e][t].shift[l].toLowerCase());else for(let e=0;e<5;e+=1)for(let t=0;t<n[e].children.length;t+=1)Object.keys(s.default[e][t]).includes("shift")&&(n[e].children[t].innerHTML=s.default[e][t].shift[l])}function a(){if(t.classList.contains("key_caps"))for(let e=0;e<5;e+=1)for(let t=0;t<n[e].children.length;t+=1)1===n[e].children[t].textContent.length&&(n[e].children[t].innerHTML=s.default[e][t].key[l].toUpperCase());else for(let e=0;e<5;e+=1)for(let t=0;t<n[e].children.length;t+=1)n[e].children[t].innerHTML=s.default[e][t].key[l]}function u(e){"keydown"===e.type&&i(),"keyup"===e.type&&a()}function y(){if(e.selectionStart!==e.selectionEnd){let t=[...e.value];t.splice(e.selectionStart,e.selectionEnd-e.selectionStart,"    "),t=t.join(""),e.value=t,o+=4,e.setSelectionRange(o,o)}else{e.setSelectionRange(o,o);let t=[...e.value];t.splice(o,0,"    "),t=t.join(""),e.value=t,o+=4,e.setSelectionRange(o,o)}}function d(){if(0!==e.value.length&&0!==o)if(e.selectionStart!==e.selectionEnd){let t=[...e.value];t.splice(e.selectionStart,e.selectionEnd-e.selectionStart),t=t.join(""),e.value=t,e.setSelectionRange(o,o)}else{e.setSelectionRange(o,o);let t=[...e.value];t.splice(o-1,1),t=t.join(""),e.value=t,o-=1,e.setSelectionRange(o,o)}}function f(){if(e.selectionStart!==e.value.length)if(e.selectionStart!==e.selectionEnd){let t=[...e.value];t.splice(e.selectionStart,e.selectionEnd-e.selectionStart),t=t.join(""),e.value=t,e.setSelectionRange(o,o)}else{let t=[...e.value];t.splice(o,1),t=t.join(""),e.value=t,e.setSelectionRange(o,o)}}function k(){if(e.selectionStart!==e.selectionEnd){let t=[...e.value];t.splice(e.selectionStart,e.selectionEnd-e.selectionStart,"\n"),t=t.join(""),e.value=t,o+=1,e.setSelectionRange(o,o)}else{e.setSelectionRange(o,o);let t=[...e.value];t.splice(o,0,"\n"),t=t.join(""),e.value=t,o+=1,e.setSelectionRange(o,o)}}window.addEventListener("load",(function(){if(localStorage.getItem("lang"))if("en"===localStorage.getItem("lang"))for(let e=0;e<5;e+=1)for(let l=0;l<n[e].children.length;l+=1)t.classList.contains("key_caps")||1!==n[e].children[l].textContent.length?1===n[e].children[l].textContent.length&&(n[e].children[l].innerHTML=s.default[e][l].key.en.toUpperCase()):n[e].children[l].innerHTML=s.default[e][l].key.en;else for(let e=0;e<5;e+=1)for(let l=0;l<n[e].children.length;l+=1)t.classList.contains("key_caps")||1!==n[e].children[l].textContent.length?1===n[e].children[l].textContent.length&&(n[e].children[l].innerHTML=s.default[e][l].key.ru.toUpperCase()):n[e].children[l].innerHTML=s.default[e][l].key.ru;if(localStorage.getItem("checkCaps")&&"true"===localStorage.getItem("checkCaps")){t.classList.add("key_caps");for(let e=0;e<5;e+=1)for(let t=0;t<n[e].children.length;t+=1)1===n[e].children[t].textContent.length&&(n[e].children[t].innerHTML=n[e].children[t].innerHTML.toUpperCase())}})),l="ru"===localStorage.getItem("lang")?"ru":"en",c="true"===localStorage.getItem("checkCaps"),e.focus(),document.addEventListener("click",(function(t){if(e.focus(),1===t.target.textContent.length)if(e.selectionStart===e.value.length&&(o=e.value.length),e.selectionStart!==e.selectionEnd){let n=[...e.value];const l=t.target.textContent;n.splice(e.selectionStart,e.selectionEnd-e.selectionStart,l),n=n.join(""),e.value=n,o+=1,e.setSelectionRange(o,o)}else{e.setSelectionRange(o,o);const n=[...e.value];n.splice(o,0,t.target.textContent),e.value=n.join(""),o+=1,e.setSelectionRange(o,o)}else"CapsLook"===t.target.textContent?r():"Tab"===t.target.textContent?y():"Backspace"===t.target.textContent?d():"Del"===t.target.textContent?f():"Enter"===t.target.textContent&&k()})),document.addEventListener("mousedown",(e=>{"Shift"===e.target.textContent&&i(),e.target.classList.contains("key")&&e.target.classList.add("key-active")})),document.addEventListener("mouseup",(e=>{"Shift"===e.target.textContent&&a(),e.target.classList.remove("key-active")})),document.addEventListener("keydown",(c=>{if(null!==document.querySelector(`.${c.code}`)&&document.querySelector(`.${c.code}`).classList.add("key-active"),c.altKey&&c.ctrlKey&&function(){if("en"===l){for(let e=0;e<5;e+=1)for(let l=0;l<n[e].children.length;l+=1)t.classList.contains("key_caps")||1!==n[e].children[l].textContent.length?1===n[e].children[l].textContent.length&&(n[e].children[l].innerHTML=s.default[e][l].key.ru.toUpperCase()):n[e].children[l].innerHTML=s.default[e][l].key.ru;l="ru"}else{for(let e=0;e<5;e+=1)for(let l=0;l<n[e].children.length;l+=1)t.classList.contains("key_caps")||1!==n[e].children[l].textContent.length?1===n[e].children[l].textContent.length&&(n[e].children[l].innerHTML=s.default[e][l].key.en.toUpperCase()):n[e].children[l].innerHTML=s.default[e][l].key.en;l="en"}}(),"Alt"!==c.key&&"AltGraph"!==c.key||c.preventDefault(),"Shift"===c.key)c.preventDefault(),u(c);else if("CapsLock"===c.key)c.preventDefault(),r();else if("Tab"===c.key)c.preventDefault(),y();else if("Backspace"===c.key)c.preventDefault(),d();else if("Delete"===c.key)c.preventDefault(),f();else if("Enter"===c.key)c.preventDefault(),k();else if(1===c.key.length||c.key.includes("Arrow"))if(c.preventDefault(),e.focus(),e.selectionStart!==e.selectionEnd){let t=[...e.value];const n=document.querySelector(`.${c.code}`).textContent;t.splice(e.selectionStart,e.selectionEnd-e.selectionStart,n),t=t.join(""),e.value=t,o+=1,e.setSelectionRange(o,o)}else{e.setSelectionRange(o,o);let t,n=[...e.value];null!==document.querySelector(`.${c.code}`)&&(t=document.querySelector(`.${c.code}`).textContent),n.splice(o,0,t),n=n.join(""),e.value=n,o+=1,e.setSelectionRange(o,o)}})),document.addEventListener("keyup",(t=>{null!==document.querySelector(`.${t.code}`)&&document.querySelector(`.${t.code}`).classList.remove("key-active"),"Shift"===t.key?u(t):t.key.includes("Arrow")&&(e.focus(),o=e.selectionStart,e.setSelectionRange(o,o))})),e.addEventListener("click",(()=>{e.selectionStart!==e.selectionEnd?(e.setSelectionRange(e.selectionStart,e.selectionEnd),o=e.selectionStart):(o=e.selectionStart,e.setSelectionRange(o,o))})),window.addEventListener("beforeunload",(function(){localStorage.setItem("lang",l),localStorage.setItem("checkCaps",c)}))}},230:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(n(784));class c extends s.default{constructor(e){super(e,"textarea","textarea"),this.element.setAttribute("autofocus","")}}t.default=()=>new c(document.querySelector(".container"))}},t={};function n(l){var s=t[l];if(void 0!==s)return s.exports;var c=t[l]={exports:{}};return e[l].call(c.exports,c,c.exports,n),c.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(53)})();
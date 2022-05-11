import keyList from './keyList';

function keyOperation() {
  const textArea = document.querySelector('.textarea');
  const capsLook = document.querySelector('.CapsLock');
  const rows = document.querySelectorAll('.row');
  let cursor = textArea.selectionStart;
  let lang;
  let checkCaps;

  function getLocalStorage() {
    if (localStorage.getItem('lang')) {
      const language = localStorage.getItem('lang');
      if (language === 'en') {
        for (let i = 0; i < 5; i += 1) {
          for (let j = 0; j < rows[i].children.length; j += 1) {
            if (!capsLook.classList.contains('key_caps') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].innerHTML = keyList[i][j].key.en;
            } else if (rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].innerHTML = keyList[i][j].key.en.toUpperCase();
            }
          }
        }
      } else {
        for (let i = 0; i < 5; i += 1) {
          for (let j = 0; j < rows[i].children.length; j += 1) {
            if (!capsLook.classList.contains('key_caps') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].innerHTML = keyList[i][j].key.ru;
            } else if (rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].innerHTML = keyList[i][j].key.ru.toUpperCase();
            }
          }
        }
      }
    }
    if (localStorage.getItem('checkCaps')) {
      const cap = localStorage.getItem('checkCaps');
      if (cap === 'true') {
        capsLook.classList.add('key_caps');
        for (let i = 0; i < 5; i += 1) {
          for (let j = 0; j < rows[i].children.length; j += 1) {
            if (rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].innerHTML = rows[i].children[j].innerHTML.toUpperCase();
            }
          }
        }
      }
    }
  }
  window.addEventListener('load', getLocalStorage);

  if (localStorage.getItem('lang') === 'ru') {
    lang = 'ru';
  } else {
    lang = 'en';
  }

  if (localStorage.getItem('checkCaps') === 'true') {
    checkCaps = true;
  } else {
    checkCaps = false;
  }
  textArea.focus();

  function langChange() {
    if (lang === 'en') {
      for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (!capsLook.classList.contains('key_caps') && rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].innerHTML = keyList[i][j].key.ru;
          } else if (rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].innerHTML = keyList[i][j].key.ru.toUpperCase();
          }
        }
      }
      lang = 'ru';
    } else {
      for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (!capsLook.classList.contains('key_caps') && rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].innerHTML = keyList[i][j].key.en;
          } else if (rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].innerHTML = keyList[i][j].key.en.toUpperCase();
          }
        }
      }
      lang = 'en';
    }
  }

  function capsChange() {
    if (!capsLook.classList.contains('key_caps')) {
      capsLook.classList.add('key_caps');
      for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].innerHTML = rows[i].children[j].innerHTML.toUpperCase();
          }
        }
      }
      checkCaps = true;
    } else {
      capsLook.classList.remove('key_caps');
      for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].innerHTML = rows[i].children[j].innerHTML.toLowerCase();
          }
        }
      }
      checkCaps = false;
    }
  }

  function shiftDown() {
    if (!capsLook.classList.contains('key_caps')) {
      for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (Object.keys(keyList[i][j]).includes('shift')) {
            rows[i].children[j].innerHTML = keyList[i][j].shift[lang];
          }
        }
      }
    } else {
      for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (Object.keys(keyList[i][j]).includes('shift') && rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].innerHTML = keyList[i][j].shift[lang].toLowerCase();
          }
        }
      }
    }
  }

  function shiftUp() {
    if (!capsLook.classList.contains('key_caps')) {
      for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          rows[i].children[j].innerHTML = keyList[i][j].key[lang];
        }
      }
    } else {
      for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].innerHTML = keyList[i][j].key[lang].toUpperCase();
          }
        }
      }
    }
  }

  function shiftChange(e) {
    if (e.type === 'keydown') {
      shiftDown();
    }
    if (e.type === 'keyup') {
      shiftUp();
    }
  }

  function tabChange() {
    if (textArea.selectionStart !== textArea.selectionEnd) {
      let text = [...textArea.value];
      text.splice(textArea.selectionStart, textArea.selectionEnd - textArea.selectionStart, '    ');
      text = text.join('');
      textArea.value = text;
      cursor += 4;
      textArea.setSelectionRange(cursor, cursor);
    } else {
      textArea.setSelectionRange(cursor, cursor);
      let text = [...textArea.value];
      text.splice(cursor, 0, '    ');
      text = text.join('');
      textArea.value = text;
      cursor += 4;
      textArea.setSelectionRange(cursor, cursor);
    }
  }

  function backspaceChange() {
    if (textArea.value.length !== 0 && cursor !== 0) {
      if (textArea.selectionStart !== textArea.selectionEnd) {
        let text = [...textArea.value];
        text.splice(textArea.selectionStart, textArea.selectionEnd - textArea.selectionStart);
        text = text.join('');
        textArea.value = text;
        textArea.setSelectionRange(cursor, cursor);
      } else {
        textArea.setSelectionRange(cursor, cursor);
        let text = [...textArea.value];
        text.splice(cursor - 1, 1);
        text = text.join('');
        textArea.value = text;
        cursor -= 1;
        textArea.setSelectionRange(cursor, cursor);
      }
    }
  }

  function deleteChange() {
    if (textArea.selectionStart !== textArea.value.length) {
      if (textArea.selectionStart !== textArea.selectionEnd) {
        let text = [...textArea.value];
        text.splice(textArea.selectionStart, textArea.selectionEnd - textArea.selectionStart);
        text = text.join('');
        textArea.value = text;
        textArea.setSelectionRange(cursor, cursor);
      } else {
        let text = [...textArea.value];
        text.splice(cursor, 1);
        text = text.join('');
        textArea.value = text;
        textArea.setSelectionRange(cursor, cursor);
      }
    }
  }

  function enterChange() {
    if (textArea.selectionStart !== textArea.selectionEnd) {
      let text = [...textArea.value];
      text.splice(textArea.selectionStart, textArea.selectionEnd - textArea.selectionStart, '\n');
      text = text.join('');
      textArea.value = text;
      cursor += 1;
      textArea.setSelectionRange(cursor, cursor);
    } else {
      textArea.setSelectionRange(cursor, cursor);
      let text = [...textArea.value];
      text.splice(cursor, 0, '\n');
      text = text.join('');
      textArea.value = text;
      cursor += 1;
      textArea.setSelectionRange(cursor, cursor);
    }
  }

  function keyClick(event) {
    textArea.focus();

    if (event.target.textContent.length === 1) {
      if (textArea.selectionStart === textArea.value.length) {
        cursor = textArea.value.length;
      }
      if (textArea.selectionStart !== textArea.selectionEnd) {
        let text = [...textArea.value];
        const currTarget = event.target.textContent;
        text.splice(textArea.selectionStart, textArea.selectionEnd - textArea.selectionStart, currTarget);
        text = text.join('');
        textArea.value = text;
        cursor += 1;
        textArea.setSelectionRange(cursor, cursor);
      } else {
        textArea.setSelectionRange(cursor, cursor);
        const text = [...textArea.value];
        text.splice(cursor, 0, event.target.textContent);
        textArea.value = text.join('');
        cursor += 1;
        textArea.setSelectionRange(cursor, cursor);
      }
    } else if (event.target.textContent === 'CapsLook') {
      capsChange();
    } else if (event.target.textContent === 'Tab') {
      tabChange();
    } else if (event.target.textContent === 'Backspace') {
      backspaceChange();
    } else if (event.target.textContent === 'Del') {
      deleteChange();
    } else if (event.target.textContent === 'Enter') {
      enterChange();
    }
  }

  document.addEventListener('click', keyClick);
  document.addEventListener('mousedown', (e) => {
    if (e.target.textContent === 'Shift') {
      shiftDown();
    }
    if (e.target.classList.contains('key')) {
      e.target.classList.add('key-active');
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (e.target.textContent === 'Shift') {
      shiftUp();
    }
    e.target.classList.remove('key-active');
  });

  document.addEventListener('keydown', (e) => {
    if (document.querySelector(`.${e.code}`) !== null) {
      document.querySelector(`.${e.code}`).classList.add('key-active');
    }

    if (e.altKey && e.ctrlKey) {
      langChange();
    }
    if (e.key === 'Alt' || e.key === 'AltGraph') {
      e.preventDefault();
    }
    if (e.key === 'Shift') {
      e.preventDefault();
      shiftChange(e);
    } else if (e.key === 'CapsLock') {
      e.preventDefault();
      capsChange();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      tabChange();
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      backspaceChange();
    } else if (e.key === 'Delete') {
      e.preventDefault();
      deleteChange();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      enterChange();
    } else if (e.key.length === 1 || e.key.includes('Arrow')) {
      e.preventDefault();
      textArea.focus();
      if (textArea.selectionStart !== textArea.selectionEnd) {
        let text = [...textArea.value];
        const cur = document.querySelector(`.${e.code}`).textContent;
        text.splice(textArea.selectionStart, textArea.selectionEnd - textArea.selectionStart, cur);
        text = text.join('');
        textArea.value = text;
        cursor += 1;
        textArea.setSelectionRange(cursor, cursor);
      } else {
        textArea.setSelectionRange(cursor, cursor);
        let text = [...textArea.value];
        let cur;
        if (document.querySelector(`.${e.code}`) !== null) {
          cur = document.querySelector(`.${e.code}`).textContent;
        }

        text.splice(cursor, 0, cur);
        text = text.join('');
        textArea.value = text;
        cursor += 1;
        textArea.setSelectionRange(cursor, cursor);
      }
    }
  });

  document.addEventListener('keyup', (e) => {
    if (document.querySelector(`.${e.code}`) !== null) {
      document.querySelector(`.${e.code}`).classList.remove('key-active');
    }

    if (e.key === 'Shift') {
      shiftChange(e);
    } else if (e.key.includes('Arrow')) {
      textArea.focus();
      cursor = textArea.selectionStart;
      textArea.setSelectionRange(cursor, cursor);
    }
  });

  textArea.addEventListener('click', () => {
    if (textArea.selectionStart !== textArea.selectionEnd) {
      textArea.setSelectionRange(textArea.selectionStart, textArea.selectionEnd);
      cursor = textArea.selectionStart;
    } else {
      cursor = textArea.selectionStart;
      textArea.setSelectionRange(cursor, cursor);
    }
  });

  function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('checkCaps', checkCaps);
  }
  window.addEventListener('beforeunload', setLocalStorage);
}
export default keyOperation;

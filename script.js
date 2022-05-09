let arr1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '↑', 'Shift1',
  'CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', '←', '↓', '→'];
let shiftArrayEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', '|', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
  'CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', '←', '↓', '→'];
let capsLockArrayEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '↑', 'Shift',
  'CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', '←', '↓', '→'];
let shiftCapsArrayEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
  'Shift', '|', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift',
  'CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', '←', '↓', '→'];
// let ruArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', '[', ']', '\\', 'Del',
//   'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
//   'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '↑', 'Shift1',
//   'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'];
// let shiftArrayru = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
//   'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
//   'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift',
//   'CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', '←', '↓', '→'];
let keyboardLang = localStorage.getItem('keyboardLanguage') || 'en';
let shiftState = false;
let capsState = false;

const pressHandler = (e) => {
  e.preventDefault();
  const textArea = document.getElementById('text-window');
  let cursorPosition = textArea.selectionStart;
  const allKey = document.querySelectorAll('.key');
  if (e.code === 'CapsLock' && e.type === 'keydown') capsState = !capsState;
  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && e.type === 'keydown') shiftState = true;
  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && e.type === 'keyup') shiftState = false;
  allKey.forEach((element, i) => {
    if (e.key === element.id && e.type === 'keydown' && element.id !== 'CapsLock') {
      element.classList.add('active');
    }
    if (e.key === element.id && e.type === 'keyup' && element.id !== 'CapsLock') {
      element.classList.remove('active');
    }
    if (e.code === 'CapsLock' && e.type === 'keydown' && element.id === 'CapsLock') element.classList.toggle('enabled');
    if (e.code === 'CapsLock' && e.type === 'keydown') {
      if (element.id !== 'CapsLock'
        && element.id !== 'Tab'
        && element.id !== 'Shift'
        && element.id !== 'Shift1'
        && element.id !== 'CtrlL'
        && element.id !== 'CtrlR'
        && element.id !== 'AltL'
        && element.id !== 'AltR'
        && element.id !== 'Win'
        && element.id !== 'Space'
        && element.id !== 'Backspace'
        && element.id !== 'Del'
        && element.id !== 'Enter') {
        if (capsState && shiftState) {
          // eslint-disable-next-line no-param-reassign
          element.textContent = shiftCapsArrayEn[i];
        }
        if (capsState && !shiftState) {
          // eslint-disable-next-line no-param-reassign
          element.textContent = capsLockArrayEn[i];
        }
        if (!capsState && !shiftState) {
          // eslint-disable-next-line no-param-reassign
          element.textContent = arr1[i];
        }
        if (!capsState && shiftState) {
          // eslint-disable-next-line no-param-reassign
          element.textContent = shiftArrayEn[i];
        }
      }
    }
    if (e.shiftKey && capsState) {
      // eslint-disable-next-line no-param-reassign
      element.textContent = shiftCapsArrayEn[i];
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Shift' || element.id === 'Shift1') element.textContent = 'Shift';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'CtrlL' || element.id === 'CtrlR') element.textContent = 'Ctrl';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'AltL' || element.id === 'AltR') element.textContent = 'Alt';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Space') element.textContent = ' ';
    }
    if (!e.shiftKey && !capsState && (e.code === 'ShiftLeft' || e.code === 'ShiftRight')) {
      // eslint-disable-next-line no-param-reassign
      element.textContent = arr1[i];
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Shift' || element.id === 'Shift1') element.textContent = 'Shift';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'CtrlL' || element.id === 'CtrlR') element.textContent = 'Ctrl';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'AltL' || element.id === 'AltR') element.textContent = 'Alt';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Space') element.textContent = ' ';
    }
    if (!e.shiftKey && capsState && (e.code === 'ShiftLeft' || e.code === 'ShiftRight')) {
      // eslint-disable-next-line no-param-reassign
      element.textContent = capsLockArrayEn[i];
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Shift' || element.id === 'Shift1') element.textContent = 'Shift';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'CtrlL' || element.id === 'CtrlR') element.textContent = 'Ctrl';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'AltL' || element.id === 'AltR') element.textContent = 'Alt';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Space') element.textContent = ' ';
    }
    if (e.shiftKey && !capsState) {
      // eslint-disable-next-line no-param-reassign
      element.textContent = shiftArrayEn[i];
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Shift' || element.id === 'Shift1') element.textContent = 'Shift';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'CtrlL' || element.id === 'CtrlR') element.textContent = 'Ctrl';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'AltL' || element.id === 'AltR') element.textContent = 'Alt';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Space') element.textContent = ' ';
    }
    if (element.id !== 'CapsLock'
      && element.id !== 'Tab'
      && element.id !== 'Shift'
      && element.id !== 'Shift1'
      && element.id !== 'CtrlL'
      && element.id !== 'CtrlR'
      && element.id !== 'AltL'
      && element.id !== 'AltR'
      && element.id !== 'Win'
      && element.id !== 'Space'
      && element.id !== 'Backspace'
      && element.id !== 'Del'
      && element.id !== 'Enter'
      && (element.textContent === e.key || element.id === e.key)
      && e.type === 'keydown') {
      textArea.setRangeText(element.textContent, cursorPosition, cursorPosition, 'end');
    }
  });
};
const clickHandler = (e) => {
  const textArea = document.getElementById('text-window');
  let cursorPosition = textArea.selectionStart;
  const allKey = document.querySelectorAll('.key');
  if (e.target.id === 'CapsLock' && e.type === 'mousedown') capsState = !capsState;
  if ((e.target.id === 'Shift' || e.target.id === 'Shift1')
    && e.type === 'mousedown') {
    shiftState = true;
  }
  if ((e.target.id === 'Shift1' || e.target.id === 'Shift')
    && e.type === 'mouseup') {
    shiftState = false;
  }
  if (e.type === 'mousedown' && !e.target.classList.contains('CapsLock')) e.target.classList.add('active');
  if (e.type === 'mouseup' && !e.target.classList.contains('CapsLock')) e.target.classList.remove('active');
  if (e.type === 'mousedown' && e.target.id === 'CapsLock') {
    e.target.classList.toggle('enabled');
    allKey.forEach((element, i) => {
      if (element.id !== 'CapsLock'
        && element.id !== 'Tab'
        && element.id !== 'Shift'
        && element.id !== 'Shift1'
        && element.id !== 'CtrlL'
        && element.id !== 'CtrlR'
        && element.id !== 'AltL'
        && element.id !== 'AltR'
        && element.id !== 'Win'
        && element.id !== 'Space'
        && element.id !== 'Backspace'
        && element.id !== 'Del'
        && element.id !== 'Enter') {
        if (capsState && !shiftState && e.target.id === 'CapsLock') {
          // eslint-disable-next-line no-param-reassign
          element.textContent = capsLockArrayEn[i];
        }
        if (!capsState && !shiftState && e.target.id === 'CapsLock') {
          // eslint-disable-next-line no-param-reassign
          element.textContent = arr1[i];
        }
      }
    });
  }
  if ((e.target.id === 'Shift' || e.target.id === 'Shift1') && !capsState && e.type === 'mousedown') {
    allKey.forEach((element, i) => {
      // eslint-disable-next-line no-param-reassign
      element.textContent = shiftArrayEn[i];
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Shift' || element.id === 'Shift1') element.textContent = 'Shift';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'CtrlL' || element.id === 'CtrlR') element.textContent = 'Ctrl';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'AltL' || element.id === 'AltR') element.textContent = 'Alt';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Space') element.textContent = ' ';
    });
  }
  if ((e.target.id === 'Shift' || e.target.id === 'Shift1') && !capsState && e.type === 'mouseup') {
    allKey.forEach((element, i) => {
      // eslint-disable-next-line no-param-reassign
      element.textContent = arr1[i];
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Shift' || element.id === 'Shift1') element.textContent = 'Shift';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'CtrlL' || element.id === 'CtrlR') element.textContent = 'Ctrl';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'AltL' || element.id === 'AltR') element.textContent = 'Alt';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Space') element.textContent = ' ';
    });
  }
  if ((e.target.id === 'Shift' || e.target.id === 'Shift1') && capsState && e.type === 'mousedown') {
    allKey.forEach((element, i) => {
      // eslint-disable-next-line no-param-reassign
      element.textContent = shiftCapsArrayEn[i];
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Shift' || element.id === 'Shift1') element.textContent = 'Shift';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'CtrlL' || element.id === 'CtrlR') element.textContent = 'Ctrl';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'AltL' || element.id === 'AltR') element.textContent = 'Alt';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Space') element.textContent = ' ';
    });
  }
  if ((e.target.id === 'Shift' || e.target.id === 'Shift1') && capsState && e.type === 'mouseup') {
    allKey.forEach((element, i) => {
      // eslint-disable-next-line no-param-reassign
      element.textContent = capsLockArrayEn[i];
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Shift' || element.id === 'Shift1') element.textContent = 'Shift';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'CtrlL' || element.id === 'CtrlR') element.textContent = 'Ctrl';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'AltL' || element.id === 'AltR') element.textContent = 'Alt';
      // eslint-disable-next-line no-param-reassign
      if (element.id === 'Space') element.textContent = ' ';
    });
  }
  if (e.target.id !== 'CapsLock'
    && e.target.id !== 'Tab'
    && e.target.id !== 'Shift'
    && e.target.id !== 'Shift1'
    && e.target.id !== 'CtrlL'
    && e.target.id !== 'CtrlR'
    && e.target.id !== 'AltL'
    && e.target.id !== 'AltR'
    && e.target.id !== 'Win'
    && e.target.id !== 'Space'
    && e.target.id !== 'Backspace'
    && e.target.id !== 'Del'
    && e.target.id !== 'Enter'
    && e.type === 'mousedown') {
    textArea.setRangeText(e.target.textContent, cursorPosition, cursorPosition, 'end');
  }
};
window.addEventListener('keydown', pressHandler);
window.addEventListener('keyup', pressHandler);
const createFirst = () => {
  const body = document.body;
  const textWindow = document.createElement('textarea');
  textWindow.value = '';
  textWindow.classList.add('text-window');
  textWindow.id = 'text-window';
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard__wrapper');
  arr1.forEach(el => {
    const key = document.createElement('div');
    key.classList.add('key', el);
    key.id = el;
    key.textContent = el;
    if (el === 'Shift' || el === 'Shift1') key.textContent = 'Shift';
    if (el === 'CtrlL' || el === 'CtrlR') key.textContent = 'Ctrl';
    if (el === 'AltL' || el === 'AltR') key.textContent = 'Alt';
    if (el === 'Space') key.textContent = ' ';
    if (el === '←') key.id = 'ArrowLeft';
    if (el === '↑') key.id = 'ArrowUp';
    if (el === '↓') key.id = 'ArrowDown';
    if (el === '→') key.id = 'ArrowRight';
    key.addEventListener('mousedown', clickHandler);
    key.addEventListener('mouseup', clickHandler);
    keyboard.append(key);
  });
  const span = document.createElement('span');
  span.textContent = 'Клавиатура создана в операционной системе Windows';
  const span1 = document.createElement('span');
  span1.textContent = 'Для переключения языка комбинация: левыe alt + shift';
  body.append(textWindow, keyboard, span, span1);
};

window.addEventListener('DOMContentLoaded', createFirst);
window.addEventListener('beforeunload', () => localStorage.setItem('keyboardLanguage', keyboardLang));

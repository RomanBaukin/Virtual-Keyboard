import keyList from './keyList';
import Creator from './creator';

class Keyboard extends Creator {
  constructor(parent) {
    super(parent, 'div', 'keyboard');
    keyList.forEach((e) => {
      this.row = new Creator(this.element, 'div', 'row');
      for (let i = 0; i < e.length; i++) {
        this.btn = new Creator(this.row.element, 'button', `${e[i].class}`);
        this.btn.element.textContent = `${e[i].key.en}`;
      }
    });
  }
}

const createKeyboard = () => new Keyboard(document.querySelector('.container'));

export default createKeyboard;

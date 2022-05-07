import Creator from './creator';

class TextArea extends Creator {
  constructor(parent) {
    super(parent, 'textarea', 'textarea');
    this.element.setAttribute('autofocus', '');
  }
}

const createTextArea = () => new TextArea(document.querySelector('.container'));

export default createTextArea;

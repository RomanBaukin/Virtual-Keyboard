import Creator from './creator';

class ContentRender extends Creator {
  constructor(parent) {
    super(parent, 'div', 'container');
    this.title = new Creator(this.element, 'h1', 'title');
    this.title.element.innerHTML = 'RSS Virtual Keyboard';
  }
}

const createContent = () => new ContentRender(document.body);

export default createContent;

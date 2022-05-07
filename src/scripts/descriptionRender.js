import Creator from './creator';

const createDescription = () => {
  const p1 = new Creator(document.querySelector('.container'), 'p', 'description');
  const p2 = new Creator(document.querySelector('.container'), 'p', 'description');
  p1.element.textContent = 'To switch language press Alt + Ctrl';
  p2.element.textContent = 'The keyboard was created in the Windows operating system';
};

export default createDescription;

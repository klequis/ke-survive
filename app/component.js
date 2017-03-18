export default (text = 'Hello world more') => {
  const element = document.createElement('div');

  element.innerHTML = text;

  return element;
};

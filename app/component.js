export default (text = 'Hello world more') => {
  const element = document.createElement('div');
  // element.className = 'pure-button';
  element.className = 'fa fa-hand-spock-o fa-1g';
  element.innerHTML = text;

  return element;
};

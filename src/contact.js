import _ from 'lodash';
function contactPage() {
  const element = document.querySelector('.content');
  const h1 = document.createElement('h1');

  element.appendChild(h1);
  return element;
}

export { contactPage as  default};

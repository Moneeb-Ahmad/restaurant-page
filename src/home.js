import _ from 'lodash';
import Icon from './green.png';

function homePage() {
  const element = document.querySelector('.content');
  const h1 = document.createElement('h1');
  const p1 = document.createElement('p');
  const myIcon = new Image();


  myIcon.src = Icon;
  h1.textContent = "World's Greatest Restaurant";
  p1.textContent = "Get ready to explore our best items we have to offer!";


  element.appendChild(h1);
  element.appendChild(myIcon);
  element.appendChild(p1);
  return element;
}

export {
  homePage as
  default
};

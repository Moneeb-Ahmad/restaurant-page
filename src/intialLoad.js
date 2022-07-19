import _ from 'lodash';
import './styles.css';
import Icon from './green.png';
function intialComponent() {
  const element = document.createElement('div');
  element.classList.add("content")
  const h1 = document.createElement('h1');
  const p1 = document.createElement('p');
  const myIcon = new Image();


  myIcon.src = Icon;
  h1.textContent="World's Greatest Restaurant";
  p1.textContent="Get ready to explore our best items we have to offer!";


  element.appendChild(myIcon);
  element.appendChild(h1);
  element.appendChild(p1);
  return element;
}

export {   intialComponent as  default};

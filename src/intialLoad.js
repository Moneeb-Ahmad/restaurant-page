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
  h1.textContent = "World's Greatest Restaurant";
  p1.textContent = "Get ready to explore our best items we have to offer!";


  element.appendChild(h1);
  element.appendChild(myIcon);
  element.appendChild(p1);
  return element;
}

function tabCreator() {
  const tabWrapper = document.createElement('div');
  tabWrapper.classList.add("tab-wrapper");
  const home = document.createElement('div');
  home.classList.add("home");
  const menu = document.createElement('div');
  menu.classList.add("menu");
  const contact = document.createElement('div');
  contact.classList.add("contact");


  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";


  tabWrapper.appendChild(home);
  tabWrapper.appendChild(menu);
  tabWrapper.appendChild(contact);

  return tabWrapper;
}

export {
  intialComponent,
  tabCreator
};

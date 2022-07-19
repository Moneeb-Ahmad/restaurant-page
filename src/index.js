import './styles.css';
import {
  intialComponent,
  tabCreator
} from './intialLoad.js';
import homePage from './home.js';

document.body.appendChild(tabCreator());
document.body.appendChild(intialComponent());
const container = document.querySelector('.content');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

function removeAllChildrenFromContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

/*removeAllChildrenFromContainer();

homePage();
console.log(container);*/

function homeClick(e) {
  home.style["transform"] = "scale(1.15)";
  menu.style["transform"] = "scale(1.0)";
  contact.style["transform"] = "scale(1.0)";
  home.style["color"] = "#EEEEEE";
  menu.style["color"] = "#CCCCCC";
  contact.style["color"] = "#CCCCCC";
}

function menuClick(e) {
  home.style["transform"] = "scale(1.0)";
  menu.style["transform"] = "scale(1.15)";
  contact.style["transform"] = "scale(1.0)";
  home.style["color"] = "#CCCCCC";
  menu.style["color"] = "#EEEEEE";
  contact.style["color"] = "#CCCCCC";
}

function contactClick(e) {
  home.style["transform"] = "scale(1.0)";
  menu.style["transform"] = "scale(1.0)";
  contact.style["transform"] = "scale(1.15)";
  home.style["color"] = "#CCCCCC";
  menu.style["color"] = "#CCCCCC";
  contact.style["color"] = "#EEEEEE";
}

home.addEventListener('click', homeClick);
menu.addEventListener('click', menuClick);
contact.addEventListener('click', contactClick);

import './styles.css';
import {
  intialComponent,
  tabCreator
} from './intialLoad.js';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const container = document.createElement('div');
container.classList.add("container");
container.appendChild(tabCreator());
container.appendChild(intialComponent());
document.body.appendChild(container);
const content = document.querySelector('.content');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

function removeAllChildrenFromContainer() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

/*removeAllChildrenFromContainer();

homePage();
console.log(container);*/

function homeClick(e) {
  removeAllChildrenFromContainer();
  homePage();
  home.style["transform"] = "scale(1.15)";
  menu.style["transform"] = "scale(1.0)";
  contact.style["transform"] = "scale(1.0)";
  home.style["color"] = "#EEEEEE";
  menu.style["color"] = "#CCCCCC";
  contact.style["color"] = "#CCCCCC";
}

function menuClick(e) {
  removeAllChildrenFromContainer();
  menuPage();
  home.style["transform"] = "scale(1.0)";
  menu.style["transform"] = "scale(1.15)";
  contact.style["transform"] = "scale(1.0)";
  home.style["color"] = "#CCCCCC";
  menu.style["color"] = "#EEEEEE";
  contact.style["color"] = "#CCCCCC";
}

function contactClick(e) {
  removeAllChildrenFromContainer();
  contactPage();
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

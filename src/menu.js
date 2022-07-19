import _ from 'lodash';
import salad from './anh-nguyen-kcA-c3f_3FE-unsplash.jpg';
import pancake from './chad-montano-eeqbbemH9-c-unsplash.jpg';
import pizza from './chad-montano-MqT0asuoIcU-unsplash.jpg';

function menuPage() {
  const element = document.querySelector('.content');
  const foodWrapper = document.createElement('div');
  const saladWrapper = document.createElement('div');
  const pancakeWrapper = document.createElement('div');
  const pizzaWrapper = document.createElement('div');
  const saladTop = document.createElement('div');
  const pancakeTop = document.createElement('div');
  const pizzaTop = document.createElement('div');
  const saladFooter = document.createElement('div');
  const pancakeFooter = document.createElement('div');
  const pizzaFooter = document.createElement('div');
  const h1 = document.createElement('h1');
  /*const saladDesc = document.createElement('p');
  const pancakeDesc = document.createElement('p');
  const pizzaDesc = document.createElement('p');*/

  saladFooter.classList.add('food-footer');
  pancakeFooter.classList.add('food-footer');
  pizzaFooter.classList.add('food-footer');
  foodWrapper.classList.add('food-wrapper');
  foodWrapper.appendChild(saladWrapper);
  foodWrapper.appendChild(pancakeWrapper);
  foodWrapper.appendChild(pizzaWrapper);
  saladWrapper.appendChild(saladTop);
  saladWrapper.appendChild(saladFooter);
  pancakeWrapper.appendChild(pancakeTop);
  pancakeWrapper.appendChild(pancakeFooter);
  pizzaWrapper.appendChild(pizzaTop);
  pizzaWrapper.appendChild(pizzaFooter);

  h1.textContent = "Menu";

  saladTop.textContent = "World's Greatest Salad";
  pancakeTop.textContent = "World's Greatest Pancakes";
  pizzaTop.textContent = "World's Greatest Pizza";

  const saladImage = new Image();
  const pancakeImage = new Image();
  const pizzaImage = new Image();

  saladImage.src = salad;
  pancakeImage.src = pancake;
  pizzaImage.src = pizza;

  saladImage.classList.add("food-image");
  pancakeImage.classList.add("food-image");
  pizzaImage.classList.add("food-image");

  saladFooter.innerHTML =
    `Photo by
                        <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Anh Nguyen</a> on
                        <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Unsplash</a>`;
  pancakeFooter.innerHTML =
    `Photo by
                          <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                          Chad Montano </a> on
                          <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                          Unsplash</a>`;
  pizzaFooter.innerHTML =
    `Photo by
                        <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Chad Montano </a> on
                        <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Unsplash</a>`;

  saladTop.appendChild(saladImage);
  pancakeTop.appendChild(pancakeImage);
  pizzaTop.appendChild(pizzaImage);
  element.appendChild(h1);
  element.appendChild(foodWrapper);
  return element;
}

export {
  menuPage as
  default
};

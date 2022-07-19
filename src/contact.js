import _ from 'lodash';

function contactPage() {
  const element = document.querySelector('.content');
  const h1 = document.createElement('h1');
  const name = document.createElement('p');
  const email = document.createElement('p');
  const phone = document.createElement('p');
  const address = document.createElement('p');

  h1.textContent = "Contact";
  name.textContent = "Real Name";
  email.textContent = "real.name@realdomain.com";
  phone.textContent = "012-345-6789";
  address.textContent = "000 Real Street Rd. Real-City, State 12345";

  element.appendChild(h1);
  element.appendChild(name);
  element.appendChild(email);
  element.appendChild(phone);
  element.appendChild(address);
  return element;
}

export {
  contactPage as
  default
};

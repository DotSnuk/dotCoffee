import './style.css';

const element = document.createElement('div');
element.id = 'content';
element.innerText = 'blabla';
document.body.appendChild(element);
console.log('hello you');

class Site {
  createDiv() {
    const div = document.createElement('div');
    return div;
  }

  addClassToDiv(div, nameClass) {
    div.classList.add(nameClass);
  }

  // perhaps getter and setter for class?
}

class MainContent extends Site() {
  constructor() {
    this.title = 'dotCoffee';
  }
}

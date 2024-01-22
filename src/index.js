import './style.css';

const element = document.createElement('div');
element.id = 'content';
element.innerText = 'blabla';
document.body.appendChild(element);
console.log('hello you');

function createDiv() {
  const div = document.createElement('div');
  return div;
}

class MainContent extends Site() {
  constructor() {
    this.title = 'dotCoffee';
  }
  createMenuBar() {}
}

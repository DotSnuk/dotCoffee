import './style.css';
import DivModifier from './divmodifier.js';
import MenubarItem from './menubarItem.js';
import { coffee } from './coffee.js';
import { tea } from './tea.js';

class MainPage extends DivModifier {
  constructor() {
    super();
    this.title = 'dotCoffee';
    this.content = 'content';
    this.menuList = ['coffee', 'tea'];
    this.render();
    this.activeContainer(tea);
    // this.loadModule(coffee);
  }
  render() {
    const elements = ['title', 'menubar', 'container', 'footer'];
    elements.forEach(elmnt => super.divToParent(this.content, elmnt));
    this.addTitleText();
  }
  set title(value) {
    this._title = value;
  }
  get title() {
    return this._title;
  }
  set content(valueId) {
    const div = super.divToParent(document.body, valueId);
    this._content = div;
  }
  get content() {
    return this._content;
  }
  set currentModule(current) {
    this._currentModule = current;
  }
  get currentModule() {
    return this._currentModule;
  }
  addToMenuList(item) {
    this.menuList.push(item);
  }
  addTitleText() {
    document.getElementById('title').innerText = this.title;
  }
  populateMenuBar() {
    const menubar = document.getElementById('menubar');
    const ul = document.createElement('ul');
    menubar.appendChild(ul);
    this.menuList.forEach(item => {
      const li = document.createElement('li');
      ul.appendChild(li);
      // const div = document.createElement('div');
      const a = document.createElement('a');
      li.appendChild(a);
      a.classList.add('menuitem');
      a.innerText = item;
      a.href = '#';
      a.addEventListener('click', () => {
        this.activeContainer(item);
      });
      // a.onclick = function () {
      //   console.log(item);
      // };
      // li.appendChild(div);
      // div.classList.add('menuitem');
      // div.innerText = item;
    });
  }

  activeContainer(containr) {
    this.removeChildren();
    containr.populateItems();
  }
  removeChildren() {
    const container = document.getElementById('container');
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      container.removeChild(item);
    });
  }
}

const SITE = new MainPage();
// const coffeeLink = new MenubarItem('coffee', 'coffee.js');
// const teaLink = new MenubarItem('tea', 'tea.js');

// SITE.addToMenuList(coffeeLink);
// SITE.addToMenuList(teaLink);

SITE.populateMenuBar();

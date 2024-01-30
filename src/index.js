import './style.css';
import DivModifier from './divmodifier.js';
import MenubarItem from './menubarItem.js';
import { coffee } from './coffee.js';

class MainPage extends DivModifier {
  constructor() {
    super();
    this.title = 'dotCoffee';
    this.content = 'content';
    this.menuList = [];
    this.render();
    this.activeModule(coffee);
    // this.loadModule(coffee);
  }
  render() {
    const elements = ['title', 'menubar', 'module', 'footer'];
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
    this.menuList.forEach(item => {
      const div = super.divToParent(menubar);
      div.classList.add('menuitem');
      // if item.active == true add active (or something)
      div.innerText = item.name;
    });
  }
  activeModule(mod) {
    mod.populateParent();
    //?
  }
  loadModule(mod) {
    const module = document.getElementById('module');
    mod.itemList.forEach(item => {
      const div = super.divToParent(module);
      div.innerText = item.name;
    });
  }
}

const SITE = new MainPage();
const coffeeLink = new MenubarItem('coffee', 'coffee.js');
const teaLink = new MenubarItem('tea', 'tea.js');
const dessertLink = new MenubarItem('dessert', 'dessert.js');
console.log(coffee);

SITE.addToMenuList(coffeeLink);
SITE.addToMenuList(teaLink);
SITE.addToMenuList(dessertLink);
SITE.populateMenuBar();

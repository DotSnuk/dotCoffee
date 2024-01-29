import './style.css';
import MenubarItem from './menubarItem';

export default class DivModifier {
  divToParent(parent, id = '') {
    const div = document.createElement('div');
    if (id !== '') div.id = id;
    parent.appendChild(div);
    return div;
  }
}

class MainPage extends DivModifier {
  constructor() {
    super();
    this.title = 'dotCoffee';
    this.content = 'content';
    this.menuList = [];
    this.render();
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
}
const site = new MainPage();
const coffeeLink = new MenubarItem('coffee', 'coffee.js');
const teaLink = new MenubarItem('tea', 'tea.js');
const dessertLink = new MenubarItem('dessert', 'dessert.js');
site.addToMenuList(coffeeLink);
site.addToMenuList(teaLink);
site.addToMenuList(dessertLink);
site.populateMenuBar();

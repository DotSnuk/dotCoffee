import DivModifier from './divmodifier.js';

export default class Module extends DivModifier {
  constructor() {
    super();
    this.itemList = [];
  }
  set itemList(list) {
    this._itemList = list;
  }
  get itemList() {
    return this._itemList;
  }
  set parent(value) {
    this._parent = value;
  }
  get parent() {
    return this._parent;
  }
  addToList(item) {
    this._itemList.push(item);
  }
  expandItem(div, item) {
    div.innerText = `${item.name} ${item.description}, ${item.prices}`;
    item.prices.forEach(price => {
      const priceEntry = Object.entries(price);
      let string = '';
      for (const [key, val] of priceEntry) {
        string += `${key} ${val},`;
      }
      console.log(string);
    });
  }
  divToContainer() {
    const containerDiv = document.getElementById('container');
    const elements = ['filter', 'itemContainer'];
    elements.forEach(elmnt => super.divToParent(containerDiv, elmnt));
  }
  populateItems() {
    // this.itemList.forEach(item => {
    //   const div = super.divToParent(document.getElementById('module')); id is now container
    //   div.classList.add('item');
    //   div.innerText = '> ' + item.name;
    //   div.addEventListener('click', () => {
    //     this.expandItem(div, item);
    //   });
    // });
  }
}

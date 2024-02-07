import DivModifier from './divmodifier.js';

export default class ItemContainer extends DivModifier {
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
    this.itemList.forEach(item => {
      const div = super.divToParent(document.getElementById('itemContainer'));
      div.classList.add('item');
      this.renderItem(div, item);
      // div.style.backgroundImage = "url('" + item.picture + "')";
      // div.addEventListener('click', () => {
      //   this.expandItem(div, item);
      // });
    });
  }
  renderItem(div, item) {
    div.style.backgroundImage = "url('" + item.picture + "')";
    const elements = ['name', 'middle', 'bottom'];
    elements.forEach(elemnt => {
      div.appendChild(this.itemDivParser(elemnt, item));
      // perhaps appendChild(itemDivParser(elemnt, item)) ?? and have itemDivParser return the div
    });
    // div and item parameter
    // set background
    // set name
    // create list of prices
    // order button
  }
  itemDivParser(divName, item) {
    const newDiv = document.createElement('div');
    const divParser = {
      name: () => {
        newDiv.innerText = item.name;
      },
      middle: () => {
        console.log(divName);
      },
      bottom: () => {},
    }[divName]();
    return newDiv;
  }
  addPriceList() {}
}

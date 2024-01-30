import DivModifier from './divmodifier.js';

export default class Module extends DivModifier {
  constructor() {
    super();
    this.itemList = [];
    this.parent = document.getElementById('module');
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
  expandItem() {}
  populateParent() {
    this.itemList.forEach(item => {
      console.log(this);
      const div = super.divToParent(document.getElementById('module'));
      div.innerText = item.name;
      // const itemDiv = super.divToParent(this.parent);
      // itemDiv.classList.add('item');
      // itemDiv.innerText = item.name;
      // add eventlistener for clicking item
    });
  }
}

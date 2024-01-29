import DivModifier from 'index.js';
import Item from './item.js';

export default class Module extends DivModifier {
  constructor() {
    this.itemList = [];
  }
  set itemList(list) {
    this._itemList = list;
  }
  get itemList() {
    return this._itemList;
  }
  addToList(item) {
    this._itemList.push(item);
  }
}

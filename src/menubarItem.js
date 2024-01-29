export default class MenubarItem {
  constructor(name, link) {
    this.name = name;
    this.link = link;
    this.active = false;
  }

  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }

  set link(value) {
    this._link = value;
  }
  get link() {
    return this._link;
  }

  // functions to alter active.
  // if it's active. name should be `<${this.name} />`
}

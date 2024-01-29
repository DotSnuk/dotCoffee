export default class Item {
  constructor(name) {
    this.name = name;
    this.description = '';
    this.picture = '';
    this.prices = [];
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set description(value) {
    this._description = value;
  }
  get description() {
    return this._description;
  }
  set picture(picturePath) {
    this._picture = picturePath;
  }
  get picture() {
    return this._picture;
  }
  set prices(costPerVolume) {
    this._prices = costPerVolume;
  }
  get prices() {
    return this._prices;
  }
  addToPrice(volumePrice) {
    this._prices.push(volumePrice);
  }
}

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

  populateItems() {
    this.itemList.forEach(item => {
      const div = super.divToParent(document.getElementById('container'));
      div.classList.add('item');
      this.renderItem(div, item);
    });
  }

  renderItem(div, item) {
    div.style.backgroundImage = "url('" + item.picture + "')";
    const elements = ['name', 'middle', 'bottom'];
    elements.forEach(elemnt => {
      div.appendChild(this.itemDivParser(elemnt, item));
    });
  }

  itemDivParser(divName, item) {
    const newDiv = document.createElement('div');
    const divParser = {
      name: () => {
        newDiv.innerText = item.name;
        newDiv.id = 'itemName';
      },
      middle: () => {
        return;
      },
      bottom: () => {
        newDiv.id = 'prices';
        newDiv.appendChild(this.addPriceList(item));
      },
    }[divName]();
    return newDiv;
  }

  addPriceList(item) {
    const selectElmnt = document.createElement('select');
    selectElmnt.name = 'select';
    selectElmnt.id = 'select';
    item.prices.forEach(pricePerVolume => {
      const optionElmnt = document.createElement('option');
      let priceString = '';
      for (const [key, value] of Object.entries(pricePerVolume)) {
        const priceParser = {
          volumeInDl: () => {
            priceString += `${value} dl: `;
            optionElmnt.dataset.volume = value;
          },
          cost: () => {
            priceString += `${value}kr`;
            optionElmnt.dataset.cost = value;
            // have a default like switch?
          },
        }[key]();
      }
      // do something with dataset
      optionElmnt.innerText = priceString;
      selectElmnt.appendChild(optionElmnt);
    });

    return selectElmnt;
  }
}

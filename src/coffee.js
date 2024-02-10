import Item from './item.js';
import ItemContainer from './itemcontainer.js';

const americano = new Item('Americano');
americano.addToPrice({ volumeInDl: '3', cost: 20 });
americano.picture = 'images/americano.jpg';

const cappuccino = new Item('Cappuccino');
cappuccino.addToPrice({ volumeInDl: '2', cost: 30 });
cappuccino.picture = 'images/cappuccino.jpg';

const coldBrew = new Item('Cold Brew');
coldBrew.addToPrice({ volumeInDl: '3', cost: 20 });
coldBrew.picture = 'images/coldbrew.jpg';

const drip = new Item('Drip');
drip.addToPrice({ volumeInDl: '3', cost: 15 });
drip.picture = 'images/drip.jpg';

const espresso = new Item('Espresso');
espresso.addToPrice({ volumeInDl: '2', cost: 30 });
espresso.picture = 'images/espresso.jpg';

const flatWhite = new Item('Flat white');
flatWhite.addToPrice({ volumeInDl: '4', cost: 40 });
flatWhite.picture = 'images/flatwhite.jpg';

const frappe = new Item('Frappe');
frappe.addToPrice({ volumeInDl: '3', cost: 30 });
frappe.picture = 'images/frappe.jpg';

const latte = new Item('Latte');
latte.addToPrice({ volumeInDl: '2', cost: 30 });
latte.picture = 'images/latte.jpg';

const mocha = new Item('Mocha');
mocha.addToPrice({ volumeInDl: '2', cost: 30 });
mocha.picture = 'images/mocha.jpg';

const frenchPress = new Item('French press');
frenchPress.addToPrice({ volumeInDl: '3', cost: 20 });
frenchPress.addToPrice({ volumeInDl: '5', cost: 30 });
frenchPress.picture = 'images/french.jpg';

export const coffee = new ItemContainer();
coffee.addToList(americano);
coffee.addToList(cappuccino);
coffee.addToList(espresso);
coffee.addToList(flatWhite);
coffee.addToList(frappe);
coffee.addToList(latte);
coffee.addToList(mocha);
coffee.addToList(frenchPress);
coffee.addToList(drip);
coffee.addToList(coldBrew);

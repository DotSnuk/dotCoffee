import Item from './item.js';
import Module from './itemcontainer.js';

const drip = new Item('Drip');
drip.description = 'Drip coffee from Arabica beans';
drip.addToPrice({ volumeInDl: '3', cost: 15 });
const coldBrew = new Item('Cold Brew');
coldBrew.description =
  'Strong ice cold coffee, has been steeped over an extended time in cold water.';
coldBrew.addToPrice({ volumeInDl: '3', cost: 20 });
const frenchPress = new Item('French press');
frenchPress.addToPrice({ volumeInDl: '3', cost: 20 });
frenchPress.addToPrice({ volumeInDl: '5', cost: 30 });
frenchPress.picture = 'images/frenchp.jpg';
export const coffee = new Module();
coffee.addToList(frenchPress);
coffee.addToList(drip);
coffee.addToList(coldBrew);

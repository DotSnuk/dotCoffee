import Item from './item.js';
import Module from './itemcontainer.js';

const drip = new Item('Drip');
drip.description = 'Drip coffee from Arabica beans';
drip.addToPrice({ volume: '3dl', cost: 15 });
const coldBrew = new Item('Cold Brew');
coldBrew.description =
  'Strong ice cold coffee, has been steeped over an extended time in cold water.';
coldBrew.addToPrice({ volume: '3dl', cost: 20 });
export const coffee = new Module();
coffee.addToList(drip);
coffee.addToList(coldBrew);

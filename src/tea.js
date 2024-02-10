import Item from './item.js';
import ItemContainer from './itemcontainer.js';

const greenTea = new Item('Green tea');
greenTea.addToPrice({ volumeInDl: '3', cost: 25 });
greenTea.picture = 'images/greentea.jpg';

const matcha = new Item('Matcha');
matcha.addToPrice({ volumeInDl: '2', cost: 40 });
matcha.picture = 'images/matcha.jpg';

const iceTea = new Item('Ice tea');
iceTea.addToPrice({ volumeInDl: '5', cost: 30 });
iceTea.picture = 'images/icetea.jpg';

const blackTea = new Item('Black tea');
blackTea.addToPrice({ volumeInDl: '3', cost: 25 });
blackTea.picture = 'images/blacktea.jpg';

const rooibos = new Item('Rooibos');
rooibos.addToPrice({ volumeInDl: '3', cost: 25 });
rooibos.picture = 'images/rooibos.jpg';

const herbalTea = new Item('Herbal tea');
herbalTea.addToPrice({ volumeInDl: '3', cost: 25 });
herbalTea.picture = 'images/herbaltea.jpg';

const whiteTea = new Item('White tea');
whiteTea.addToPrice({ volumeInDl: '3', cost: 25 });
whiteTea.picture = 'images/whitetea.jpg';

const yerbaMate = new Item('Yerba mate');
yerbaMate.addToPrice({ volumeInDl: '3', cost: 30 });
yerbaMate.picture = 'images/yerba.jpg';

export const tea = new ItemContainer();
tea.addToList(greenTea);
tea.addToList(matcha);
tea.addToList(iceTea);
tea.addToList(blackTea);
tea.addToList(rooibos);
tea.addToList(herbalTea);
tea.addToList(whiteTea);
tea.addToList(yerbaMate);

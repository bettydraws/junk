const {Composite, Tab, TabFolder, TextView, ui} = require('tabris');

const IMAGE_PATH = 'https://raw.githubusercontent.com/eclipsesource/tabris-js/master/snippets/resources/';

// Create a swipe enabled tab folder with 3 tabs

let tabFolder = new TabFolder({
  left: 0, top: 0, right: 0, bottom: 0,
  paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(ui.contentView);

let composite1 = new Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#f3f3f3'
}).appendTo(ui.contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 1'
}).appendTo(composite1);

let composite2 = new Composite({
  left: '50%', top: 0, bottom: 0, right: 0,
  background: '#eaeaea'
}).appendTo(ui.contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 2'
}).appendTo(composite2);

createTab('Cart', IMAGE_PATH + 'cart.png', IMAGE_PATH + 'cart-filled.png');
createTab('Pay', IMAGE_PATH + 'card.png', IMAGE_PATH + 'card-filled.png');
createTab('Statistic', IMAGE_PATH +  'chart.png', IMAGE_PATH + 'chart-filled.png');

tabFolder.on('selectionChanged', ({value: tab}) => console.log(tab.title));

function createTab(title, image, seletedImage) {
  let tab = new Tab({
    title: title, // converted to upper-case on Android
    image: {src: image, scale: 2},
    selectedImage: {src: seletedImage, scale: 2}
  }).appendTo(tabFolder);
  new TextView({
    centerX: 0, centerY: 0,
    text: 'Content of Tab ' + title
  }).appendTo(tab);
}



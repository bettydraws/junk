const {Composite, ui, ImageView} = require('tabris');
// example of images side by side - Matt.

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const DICE_OFFSET = 30;

let composite1 = new Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#00ccff'
}).appendTo(ui.contentView);

let diceImage1 = new ImageView({
  centerY: 0,
  centerX: -DICE_OFFSET,
  image: IMAGE_PATH + '6.png'
}).appendTo(ui.contentView);

let composite2 = new Composite({
  left: '50%', top: 0, bottom: 0, right: 0,
  background: '#008fb3'
}).appendTo(ui.contentView);


let diceImage2 = new ImageView({
  centerY: 0,
  centerX: DICE_OFFSET,
  image: IMAGE_PATH + '1.png'

}).appendTo(ui.contentView);


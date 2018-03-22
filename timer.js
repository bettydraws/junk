const {Button, ui} = require('tabris');

new Button({
  centerX: 0, centerY: 0,
  text: 'Click Here To See Whats Cool'
}).on('select', ({target}) => {
  target.text = 'Loading...';
  setTimeout(sayThanks, 2000, target);
}).appendTo(ui.contentView);

function sayThanks(widget) {
  widget.text = 'Its You!';
}

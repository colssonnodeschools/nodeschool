const domify = require('domify');
const EventEmitter = require('events').EventEmitter;
const insertCss = require('insert-css');
const htmlString = '<form class="send"><textarea type="text" name="msg"></textarea><input type="submit" value="submit"></form>';
const cssString = '.send textarea {background-color: purple;color: yellow;}';
const inherits = require('inherits');

module.exports = Widget;
inherits(Widget, EventEmitter);
function Widget() {
  if (!(this instanceof Widget)) {
    return new Widget;
  } else {
    this.element = domify(htmlString);
    this.element.addEventListener('submit', (event) => {
      event.preventDefault();
      this.emit('message', this.element.querySelector('textarea[name=msg]').value);
    });
    const styleElement = insertCss(cssString, { container: this.element });
  }
}


Widget.prototype.appendTo = function (target) {
  target.appendChild(this.element);
};

const domify = require('domify');
const htmlString = '<div>Hello <span class="name"></span>!</div>';

module.exports = Widget;

function Widget() {
  if (!(this instanceof Widget)) {
    return new Widget;
  } else {
    this.element = domify(htmlString);
  }
}

Widget.prototype.setName = function (name) {
  this.element.querySelector('.name').textContent = name;
};

Widget.prototype.appendTo = function (target) {
  target.appendChild(this.element);
};

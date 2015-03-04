var Promotion = require('./promotion');
function Reduced(name, reduced, topful) {
    this.name = name;
    this.reduced = reduced;
    this.topful = topful;
}

Reduced.prototype = Object.create(Promotion.prototype);
Reduced.prototype.constructor = Reduced;

module.exports = Reduced;
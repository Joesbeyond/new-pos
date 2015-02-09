var Promotion = require('./promotion');
function Discount(name, discount) {
    this.name = name || '';
    this.discount = discount || 1;
}
Discount.prototype = Object.create(Promotion.prototype);
Discount.prototype.constructor = Discount;

Discount.prototype.buildPromotionName = function () {
    return this.name;
};

module.exports = Discount;



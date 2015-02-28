var PromotionDecorator = require('./promotion-decorator');
function Discount(name, discount) {
    PromotionDecorator.call(this);
    this.name = name || '';
    this.discount = discount || 1;
}
Discount.prototype = Object.create(PromotionDecorator.prototype);
Discount.prototype.constructor = Discount;

Discount.prototype.buildPromotionName = function() {
    return this.name;
};

module.exports = Discount;




var _ = require('lodash');
var Discount = require('./discount');
var Promotion = require('./promotion');
var CartItem = require('../cart-item');
function BrandDiscount(name, discount, brands) {
    Discount.call(this, name, discount);
    this.brands = brands || [];
}

BrandDiscount.prototype = Object.create(Discount.prototype);
BrandDiscount.prototype.constructor = BrandDiscount;
BrandDiscount.prototype.buildPromotionName = function() {
    return this.name + '品牌打折';
};

BrandDiscount.prototype.getPromotionMoney = function (cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
    if (_.contains(self.brands, cartItem.item.getBrand())) {
        promotionMoney += cartItem.getSubtotal();

    }
});
    return promotionMoney - (promotionMoney * self.discount);
};

module.exports = BrandDiscount;
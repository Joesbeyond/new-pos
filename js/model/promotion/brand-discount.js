/**
 * Created by joes on 15-2-9.
 */
var _ = require('lodash');
var Discount = require('./discount');
var Promotion = require('./promotion');
var CartItem = require('../cart-item');

function BrandDiscount(name, discount, brand) {
    Discount.call(this, name, discount);
    this.brand = brand;
}

BrandDiscount.prototype = Object.create(Discount.prototype);
BrandDiscount.prototype.constructor = BrandDiscount;
BrandDiscount.prototype.getPromotionMoney = function (cartItems) {
var promotionMoney = 0.00;
var self = this;
_.forEach(cartItems, function(cartItem) {
    if (cartItem.item.brand === self.brand) {
        promotionMoney += cartItem.calculateTotal();
    }
});
    return promotionMoney - (promotionMoney * self.discount);
};

module.exports = BrandDiscount;
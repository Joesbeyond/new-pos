/**
 * Created by joes on 15-2-9.
 */
var _ = require('lodash');
var Discount = require('./discount');

function BrandDiscount(name, discount, brand) {
    Discount.call(this, name, discount);
    this.brand = brand;
}

BrandDiscount.prototype = Object.create(Discount.prototype);
BrandDiscount.prototype.constructor = BrandDiscount;
BrandDiscount.prototype.getPromotionMoney = function (cartItems) {
var totalMoney = 0.00;
var _this = this;
_.forEach(cartItems, function (cartItem) {
    if (cartItem.item.getBrand() === _this.brand) {
        totalMoney += cartItem.calculateTotal();
    }
});
return totalMoney * (1 - _this.discount);
};

module.exports = BrandDiscount;
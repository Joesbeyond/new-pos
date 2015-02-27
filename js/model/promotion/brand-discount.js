var PromotionDecorator = require('./promotion-decorator');
var _ = require('lodash');
var BrandDiscount = function(cartItems) {
    PromotionDecorator.call(this, cartItems);
}

BrandDiscount.prototype = Object.create(PromotionDecorator.prototype);
BrandDiscount.prototype.constructor = BrandDiscount;

BrandDiscount.prototype.getPromotionMoney = function() {
    var discount = 0.9;
    var promotionMoney = 0.00;
    var brands = ['可口可乐'];
    var cartItems = this.cartItems;
    _.forEach(cartItems, function(cartItem) {
        if (_.contains(brands, cartItem.item.getBrand())) {
            promotionMoney += cartItem.calculateTotal();

        }
    });
    return promotionMoney - (promotionMoney * discount);
};

module.exports = BrandDiscount;




/*
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

BrandDiscount.prototype.getPromotionMoney = function (cartItems) {
var promotionMoney = 0.00;
var self = this;
_.forEach(cartItems, function(cartItem) {
    if (_.contains(self.brands, cartItem.item.getBrand())) {
        promotionMoney += cartItem.calculateTotal();

    }
});
    return promotionMoney - (promotionMoney * self.discount);
};

module.exports = BrandDiscount;*/

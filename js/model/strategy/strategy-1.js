var PromotionFactory = require('../promotion/promotion-factory');
var _ = require('lodash');
function Strategy_1(cartItems) {
    this.cartItems = cartItems;
    this.savedMoney = 0;
}

Strategy_1.prototype.getPromotionInfo = function(cartItems) {
    //var promotionsString = '';
   // promotionsString += this.isBrandDiscount();
   // promotionsString += this.isFullWithReduced();
    console.log('0000');
    this.isBrandDiscount(cartItems);
    console.log('0001');
    this.getString(cartItems);
    console.log('0002');
   // return promotionsString;
}


Strategy_1.prototype.isBrandDiscount = function(cartItems) {
    var brands =  ['可口可乐'];
    var promotionMoney = 0.00;
    //var cartItems = this.cartItems;
    _.forEach(cartItems, function(cartItem) {
        if (_.contains(brands, cartItem.item.getBrand())) {
            promotionMoney += cartItem.getSubTotal();
        }
    });
    return promotionMoney - (promotionMoney * 0.9);

}
Strategy_1.prototype.getString = function() {
    var proString = PromotionFactory.createPromotion('brand');
    console.log(proString);
    proString.getPromotionString(this.cartItems);

}

/*Strategy_1.prototype.isFullWithReduced = function() {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function (cartItem) {
        if (cartItem.item.getBrand() === self.brand) {
            promotionMoney += cartItem.getSubTotal();
            // PromotionFactory.createPromotion('brand');
        }
    });
    return promotionMoney >= self.reduce ? self.reduce : 0;
}*/

module.exports = Strategy_1;

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
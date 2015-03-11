var PromotionFactory = require('../promotion/promotion-factory');
var _ = require('lodash');
function Strategy_1() {
<<<<<<< HEAD
    this.savedMoney = 0;
}

Strategy_1.prototype.getPromotionInfo = function(cartItems) {
    //var promotionsString = '';
   // promotionsString += this.isBrandDiscount();
   // promotionsString += this.isFullWithReduced();
    this.isBrandDiscount(cartItems);
    //this.getString(cartItems);
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

Strategy_1.prototype.getString = function(cartItems) {
    var proString = PromotionFactory.createPromotion('brand');
    proString.getPromotionString(cartItems);

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
=======
    this.savedMoney = 0.00;
}

Strategy_1.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';
    promotionInfo += this.getBrandDiscountString(cartItems);
    promotionInfo += this.getFullWithReducedString(cartItems);
    return promotionInfo;
};

Strategy_1.prototype.getBrandDiscountString = function(cartItems) {
    var brand = PromotionFactory.createPromotion('brand');
    this.savedMoney += brand.getPromotionMoney(cartItems);
    return brand.getPromotionString(cartItems);

};

Strategy_1.prototype.getFullWithReducedString = function(cartItems) {
    var full = PromotionFactory.createPromotion('full');
    this.savedMoney += full.getPromotionMoney(cartItems);
    return full.getPromotionString(cartItems);

};

module.exports = Strategy_1;
>>>>>>> new_branch_name

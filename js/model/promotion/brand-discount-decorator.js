var _ = require('lodash');
var Discount = require('./discount');
var CartItem = require('../cart-item');

function BrandDiscountDecorator(name, discount, brands, barcodes) {
    Discount.call(this, name, discount);
    this.brands = brands || [];
    this.barcodes = barcodes || [];
}

BrandDiscountDecorator.prototype = Object.create(Discount.prototype);
BrandDiscountDecorator.prototype.constructor = BrandDiscountDecorator;

BrandDiscountDecorator.prototype.buildPromotionName = function() {
    return this.name + '品牌打折';
};

BrandDiscountDecorator.prototype.getPromotionMoney = function(cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
        if (_.contains(self.brands, cartItem.item.getBrand())) {
            promotionMoney += cartItem.getSubtotal();
        }
    });
    return promotionMoney - (promotionMoney * self.discount) - this.unDiscountItemsMoney(cartItems) ;
};

BrandDiscountDecorator.prototype.unDiscountItemsMoney = function(cartItems) {
    var unDiscountItemsMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
    if(_.contains(self.barcodes, cartItem.item.getBarcode())) {
        unDiscountItemsMoney += cartItem.getSubtotal();
    }
    });
    return unDiscountItemsMoney - ( unDiscountItemsMoney * self.discount);
};

module.exports = BrandDiscountDecorator;
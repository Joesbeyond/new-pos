/**
 * Created by joes on 3/3/15.
 */
var _ = require('lodash');
var Discount = require('./discount');
var CartItem = require('../cart-item');

function SingleAndBrandDiscount(name, discount, brands, barcodes, singleDiscountPoint) {
    Discount.call(this, name, discount);
    this.brands = brands || [];
    this.barcodes = barcodes || [];
    this.singleDiscountPoint = singleDiscountPoint;
}

SingleAndBrandDiscount.prototype = Object.create(Discount.prototype);
SingleAndBrandDiscount.prototype.constructor = SingleAndBrandDiscount;

SingleAndBrandDiscount.prototype.buildPromotionName = function() {
    return this.name + '品牌打折';
};

SingleAndBrandDiscount.prototype.getPromotionMoney = function(cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
        if (_.contains(self.brands, cartItem.item.getBrand())) {
            promotionMoney += cartItem.getSubtotal();
        }
    });
    promotionMoney = promotionMoney - this.getSecondDiscountMoney(cartItems);
    var getDiscount =  self.discount * promotionMoney;
    return (promotionMoney * 10000 - getDiscount * 10000)/10000;
};

SingleAndBrandDiscount.prototype.getSecondDiscountMoney = function(cartItems) {
    var secondDiscountMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
        if(_.contains(self.barcodes, cartItem.item.getBarcode())) {
            secondDiscountMoney += cartItem.getSubtotal();
        }
    });
    return secondDiscountMoney - ( secondDiscountMoney * self.singleDiscountPoint);
};

module.exports = SingleAndBrandDiscount;
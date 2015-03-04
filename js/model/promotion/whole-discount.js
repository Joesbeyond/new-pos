/**
 * Created by joes on 3/4/15.
 */
var Discount = require('./discount');
var _ = require('lodash');
function WholeDiscount(name, discount, barcode, savedMoney){
    Discount.call(this, name, discount);
    this.barcode = barcode;
    this.savedMoney = savedMoney;
}

WholeDiscount.prototype = Object.create(Discount.prototype);
WholeDiscount.prototype.constructor = WholeDiscount;
WholeDiscount.prototype.buildPromotionName = function() {
    if(this.discount === 0.90){
        return '九折';
    }
};

WholeDiscount.prototype.getPromotionMoney = function(cartItems) {
    var totalMoney = 0.00;
    var promotionMoney = 0.00;
    _.forEach(cartItems, function(cartItem) {
        totalMoney += cartItem.getSubtotal();
    });
    var remainMoney = totalMoney - (this.savedMoney +  this.getUnDiscountMoney(cartItems));
    return (remainMoney * 10000 -  this.discount * 10000 * remainMoney) / 10000;
};

WholeDiscount.prototype.getUnDiscountMoney = function(cartItems) {
    var unDiscountMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
        if(self.barcode === cartItem.item.getBarcode()) {
            unDiscountMoney = cartItem.getSubtotal();
        }
    });
    return unDiscountMoney;
};

module.exports = WholeDiscount;
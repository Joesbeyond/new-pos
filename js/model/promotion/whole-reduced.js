var Reduced = require('./reduced');
var _ = require('lodash');
function WholeReduced(name, reduced, topful, barcode, savedMoney){
    Reduced.call(this, name, reduced, topful);
    this.barcode = barcode;
    this.savedMoney = savedMoney;
}

WholeReduced.prototype = Object.create(Reduced.prototype);
WholeReduced.prototype.constructor = WholeReduced;
WholeReduced.prototype.buildPromotionName = function() {
    return this.name + '满' + this.topful + '减' + this.reduced;
};

WholeReduced.prototype.getPromotionMoney = function(cartItems) {
    var totalMoney = 0.00;
    var promotionMoney = 0.00;
    _.forEach(cartItems, function(cartItem) {
        totalMoney += cartItem.getSubtotal();
    });
    var remainMoney = totalMoney - (this.savedMoney + this.getUnDiscountMoney(cartItems));
    promotionMoney = this.reduced * parseInt(remainMoney / 100);
    return remainMoney >= this.topful ?  promotionMoney : 0;
};

WholeReduced.prototype.getUnDiscountMoney = function(cartItems) {
    var unDiscountMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
        if(self.barcode === cartItem.item.getBarcode()) {
            unDiscountMoney = cartItem.getSubtotal();
        }
    });
    return unDiscountMoney;
};

module.exports = WholeReduced;
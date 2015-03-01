/**
 * Created by joes on 15-2-10.
 */
var Reduced = require('./reduced');
var _ = require('lodash');


function FullWithReduced(name, reduced, topful, barcodes){

    Reduced.call(this, name, reduced, topful);
    this.barcodes = barcodes || [];
};

FullWithReduced.prototype = Object.create(Reduced.prototype);
FullWithReduced.prototype.constructor = FullWithReduced;
FullWithReduced.prototype.buildPromotionName = function() {
    return this.name + this.topful + '减' + this.reduced;
};

FullWithReduced.prototype.getPromotionMoney = function(cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
        if(!_.contains(self.barcodes, cartItem.item.getBarcode())) {
            promotionMoney += cartItem.getSubtotal();
        }
    });
    return promotionMoney >= self.topful ? self.reduced : 0;
};

module.exports = FullWithReduced;
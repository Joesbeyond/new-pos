/**
 * Created by joes on 3/2/15.
 */
var Reduced = require('./reduced');
var _ = require('lodash');


function SingleReduced(name, reduced, topful, barcode){

    Reduced.call(this, name, reduced, topful);
    this.barcodes = barcode;
};

SingleReduced.prototype = Object.create(Reduced.prototype);
SingleReduced.prototype.constructor = SingleReduced;
SingleReduced.prototype.buildPromotionName = function() {
    return this.name + '满' + this.topful + '减' + this.reduced;
};

SingleReduced.prototype.getPromotionMoney = function(cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
        if(!_.contains(self.barcode, cartItem.item.getBarcode())) {
            promotionMoney += cartItem.getSubtotal();
        }
    });
    return promotionMoney >= self.topful ? self.reduced : 0;
};

module.exports = SingleReduced;
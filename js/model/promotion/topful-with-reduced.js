/**
 * Created by joes on 15-2-10.
 */
var Reduced = require('./reduced');
var _ = require('lodash');


function TopfulWithReduced(name, topful, reduced, barcodes) {

        Reduced.call(this, name, topful, reduced);
        this.barcodes = barcodes;
    }

TopfulWithReduced.prototype = Object.create(Reduced.prototype);
TopfulWithReduced.prototype.constructor = TopfulWithReduced;

TopfulWithReduced.prototype.getPromotionMoney = function (cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function (cartItem) {
        if (!_.contains(self.barcodes, cartItem.item.barcode)) {
            promotionMoney += cartItem.calculateTotal();
        }

    });
    return promotionMoney >= self.topful ? self.reduced : 0;
}

module.exports = TopfulWithReduced;
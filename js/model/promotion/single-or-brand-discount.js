/**
 * Created by joes on 3/1/15.
 */
var Discount = require('./discount');
var CartItem = require('../cart-item');
var _ = require('lodash');
function SingleOrBrandDiscount(name, discount, brands, barcodes) {
    Discount.call(this, name, discount);
    this.brands = brands || [];
    this.barcodes = barcodes || [];
}

SingleOrBrandDiscount.prototype = Object.create(Discount.prototype);
SingleOrBrandDiscount.prototype.constructor = SingleOrBrandDiscount;
SingleOrBrandDiscount.prototype.getPromotionMoney = function(cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
        if(_.contains(self.brands, cartItem.item.getBrand())) {
            if(_.contains(self.barcodes, cartItem.item.getBarcode())) {
                promotionMoney += cartItem.getSubtotal();
            }
        }
    });
    return promotionMoney - (promotionMoney * self.discount);
};

module.exports = SingleOrBrandDiscount;
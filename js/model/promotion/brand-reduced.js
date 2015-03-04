var Reduced = require('./reduced');
var _ = require('lodash');


function BrandReduced(name, reduced, topful, brand){

    Reduced.call(this, name, reduced, topful);
    this.brand = brand || [];
}

BrandReduced.prototype = Object.create(Reduced.prototype);
BrandReduced.prototype.constructor = BrandReduced;
BrandReduced.prototype.buildPromotionName = function() {
    return this.name + '品牌满' + this.topful + '减' + this.reduced;
};

BrandReduced.prototype.getPromotionMoney = function(cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
        if(self.brand === cartItem.item.getBrand()) {
            promotionMoney += cartItem.getSubtotal();
        }
    });
    var reducedMoney = self.reduced * parseInt(promotionMoney/self.topful);
    return promotionMoney >= self.topful ? reducedMoney : 0;
};

module.exports = BrandReduced;
<<<<<<< HEAD
var Discount = require('./promotion-decorator');
//var StrategyFactory = require('../strategy/strategy-factory');
//var Strategy_1 = require('../strategy/strategy-1');
var _ = require('lodash');
=======

var _ = require('lodash');
var Discount = require('./discount');
var CartItem = require('../cart-item');
>>>>>>> new_branch_name
function BrandDiscount(name, discount, brands) {
    Discount.call(this, name, discount);
    this.brands = brands || [];
}

BrandDiscount.prototype = Object.create(Discount.prototype);
BrandDiscount.prototype.constructor = BrandDiscount;
<<<<<<< HEAD
=======
BrandDiscount.prototype.buildPromotionName = function() {
    return this.name + '品牌打折';
};

BrandDiscount.prototype.getPromotionMoney = function(cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
    if (_.contains(self.brands, cartItem.item.getBrand())) {
        promotionMoney += cartItem.getSubtotal();
>>>>>>> new_branch_name

BrandDiscount.prototype.buildPromotionName = function() {
    return this.name + '品牌打折';
};

BrandDiscount.prototype.getPromotionMoney = function(cartItems) {
        var promotionMoney = 0.00;
        var self = this;
        _.forEach(cartItems, function(cartItem) {
            if (_.contains(self.brands, cartItem.item.getBrand())) {
                promotionMoney += cartItem.getSubTotal();
            }
        });
        return promotionMoney - (promotionMoney * self.discount);

};
module.exports = BrandDiscount;

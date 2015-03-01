var PromotionFactory = require('../promotion/promotion-factory');
var _ = require('lodash');
function Strategy_1() {
    this.savedMoney = 0.00;
}

Strategy_1.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';
    promotionInfo += this.getBrandDiscountString(cartItems);
    promotionInfo += this.getFullWithReducedString(cartItems);
    return promotionInfo;
}

Strategy_1.prototype.getBrandDiscountString = function(cartItems) {
    var brand = PromotionFactory.createPromotion('brand');
    this.savedMoney += brand.getPromotionMoney(cartItems);
    return brand.getPromotionString(cartItems);

}

Strategy_1.prototype.getFullWithReducedString = function(cartItems) {
    var full = PromotionFactory.createPromotion('full');
    this.savedMoney += full.getPromotionMoney(cartItems);
    return full.getPromotionString(cartItems);

}

module.exports = Strategy_1;

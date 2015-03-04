var PromotionFactory = require('../promotion/promotion-factory');
var _ = require('lodash');
function Strategy_4() {
    this.savedMoney = 0.00;
}

Strategy_4.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';
    promotionInfo += this.getSingleOrBrandDiscount(cartItems);
    promotionInfo += this.getBrandDiscount(cartItems);
    promotionInfo += this.getSingleReduced(cartItems);
    promotionInfo += this.getBrandReduced(cartItems);
    promotionInfo += this.getWholeDiscount(cartItems);
    return promotionInfo;
};

Strategy_4.prototype.getSingleOrBrandDiscount = function(cartItems) {
    var singleOrBrand = PromotionFactory.createPromotion('single-or-brand');
    this.savedMoney += singleOrBrand.getPromotionMoney(cartItems);
    return singleOrBrand.getPromotionString(cartItems);
};

Strategy_4.prototype.getBrandDiscount = function(cartItems) {
    var brand = PromotionFactory.createPromotion('brand');
    this.savedMoney += brand.getPromotionMoney(cartItems);
    return brand.getPromotionString(cartItems);
};

Strategy_4.prototype.getSingleReduced = function(cartItems) {
    var singleReduced = PromotionFactory.createPromotion('single-reduced');
    this.savedMoney += singleReduced.getPromotionMoney(cartItems);
    return singleReduced.getPromotionString(cartItems);
};

Strategy_4.prototype.getBrandReduced = function(cartItems) {
    var brandReduced = PromotionFactory.createPromotion('brand-reduced');
    this.savedMoney += brandReduced.getPromotionMoney(cartItems);
    return brandReduced.getPromotionString(cartItems);
};

Strategy_4.prototype.getWholeDiscount = function(cartItems) {
    var wholeReduced = PromotionFactory.createPromotion2('whole-discount', this.savedMoney);
    this.savedMoney += wholeReduced.getPromotionMoney(cartItems);
    return wholeReduced.getPromotionString(cartItems);
};

module.exports = Strategy_4;

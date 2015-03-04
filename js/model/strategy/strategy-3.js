<<<<<<< HEAD

function Strategy_3() {

}
=======
var PromotionFactory = require('../promotion/promotion-factory');
var _ = require('lodash');
function Strategy_3() {
    this.savedMoney = 0.00;
    this.partSavedMoney = 0.00;
}

Strategy_3.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';
    promotionInfo += this.getSingleOrBrandDiscount(cartItems);
    promotionInfo += this.getSingleAndBrandDiscount(cartItems);
    promotionInfo += this.getBrandReduced(cartItems);
    promotionInfo += this.getWholeReduced(cartItems);
    return promotionInfo;
};

Strategy_3.prototype.getSingleOrBrandDiscount = function(cartItems) {
    var singleOrBrand = PromotionFactory.createPromotion('single-or-brand');
    this.savedMoney += singleOrBrand.getPromotionMoney(cartItems);
    return singleOrBrand.getPromotionString(cartItems);
};

Strategy_3.prototype.getSingleAndBrandDiscount = function(cartItems) {
    var singleAndBrand = PromotionFactory.createPromotion('single-and-brand');
    this.savedMoney += singleAndBrand.getPromotionMoney(cartItems);
    return singleAndBrand.getPromotionString(cartItems);
};

Strategy_3.prototype.getBrandReduced = function(cartItems) {
    var brandReduced = PromotionFactory.createPromotion('brand-reduced');
    this.savedMoney += brandReduced.getPromotionMoney(cartItems);
    return brandReduced.getPromotionString(cartItems);
};

Strategy_3.prototype.getWholeReduced = function(cartItems) {
    var wholeReduced = PromotionFactory.createPromotion2('whole-reduced', this.savedMoney);
    this.savedMoney += wholeReduced.getPromotionMoney(cartItems);
    return wholeReduced.getPromotionString(cartItems);
};

>>>>>>> new_branch_name
module.exports = Strategy_3;

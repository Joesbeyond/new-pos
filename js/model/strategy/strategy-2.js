<<<<<<< HEAD

function Strategy_2() {

}
=======
var PromotionFactory = require('../promotion/promotion-factory');
var _ = require('lodash');
function Strategy_2() {
    this.savedMoney = 0.00;
}

Strategy_2.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';
    promotionInfo += this.getSingleOrBrandDiscount(cartItems);
    promotionInfo += this.getBrandDiscountDecorator(cartItems);
    promotionInfo += this.getBrandReduced(cartItems);
    promotionInfo += this.getSingleReduced(cartItems);
    return promotionInfo;
};

Strategy_2.prototype.getSingleOrBrandDiscount = function(cartItems) {
    var singleBrand = PromotionFactory.createPromotion('single-brand');
    this.savedMoney += singleBrand.getPromotionMoney(cartItems);
    return singleBrand.getPromotionString(cartItems);
};

Strategy_2.prototype.getBrandDiscountDecorator = function(cartItems) {
    var brandDiscountDecorator = PromotionFactory.createPromotion('brand-discount');
    this.savedMoney += brandDiscountDecorator.getPromotionMoney(cartItems);
    return brandDiscountDecorator.getPromotionString(cartItems);
};

Strategy_2.prototype.getBrandReduced = function(cartItems) {
    var brandReduced = PromotionFactory.createPromotion('brand-reduced');
    this.savedMoney += brandReduced.getPromotionMoney(cartItems);
    return brandReduced.getPromotionString(cartItems);
};


Strategy_2.prototype.getSingleReduced = function(cartItems) {
    var singleReduced = PromotionFactory.createPromotion('single-reduced');
    this.savedMoney += singleReduced.getPromotionMoney(cartItems);
    return singleReduced.getPromotionString(cartItems);
};

>>>>>>> new_branch_name
module.exports = Strategy_2;

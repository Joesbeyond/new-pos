var Interface = require('./interface');
var Promotion = require('./promotion');
var PromotionDecorator = function(cartItems) {

    this.cartItems = cartItems;
};

PromotionDecorator.prototype = {
    getPromotionMoney: function() {
        return 0;
    }
};

PromotionDecorator.prototype.getPromotionString = function() {
    var promotionMoney = this.getPromotionMoney(this.cartItems);
    return '名称：' + this.buildPromotionName(this.cartItems) + '，金额：' + promotionMoney.toFixed(2) + '元\n';
};

PromotionDecorator.prototype.buildPromotionName = function() {
    return this.name;
};

module.exports = PromotionDecorator;
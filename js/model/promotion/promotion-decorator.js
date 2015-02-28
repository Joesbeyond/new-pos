var Interface = require('./interface');
var Promotion = require('./promotion');
var PromotionDecorator = function() {

};

PromotionDecorator.prototype.getPromotionMoney = function() { return 0;};

PromotionDecorator.prototype.getPromotionString = function(cartItems) {
    return '名称：' + this.buildPromotionName(cartItems) + '，金额：' + this.getPromotionMoney(cartItems).toFixed(2) + '元\n';
};

module.exports = PromotionDecorator;
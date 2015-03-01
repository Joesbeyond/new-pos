function Promotion () {}

Promotion.prototype.getPromotionString = function(cartItems) {

    return '名称：' + this.buildPromotionName() + '，金额：' + this.getPromotionMoney(cartItems).toFixed(2) + '元\n';
};

module.exports = Promotion;
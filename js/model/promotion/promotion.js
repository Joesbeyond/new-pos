
function Promotion () {

}

Promotion.prototype.getPromotionString = function(cartItems) {
    return '名称：' + this.buildPromotionName() +
           '，金额：' + this.getPromotionMoney(cartItems).toFixed(2) + '元\n';
};

/*Promotion.prototype.buildPromotionName = function() {
    return this.name;
};*/

module.exports = Promotion;
<<<<<<< HEAD
var Interface = require('./interface');
var interface = new Interface('Promotion', ['getPromotionString','getPromotionMoney']);

function Promotion() {

}

Promotion.prototype.getPromotionString = function() {

}

Promotion.prototype.getPromotionMoney = function() {

}

=======
function Promotion () {}

Promotion.prototype.getPromotionString = function(cartItems) {

    return '名称：' + this.buildPromotionName() + '，金额：' + this.getPromotionMoney(cartItems).toFixed(2) + '元\n';
};
>>>>>>> new_branch_name

module.exports = Promotion;
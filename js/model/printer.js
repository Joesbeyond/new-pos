var moment = require('moment');
function Printer() {
}

Printer.prototype.toString = function(cart, strategy) {

    return '***<没钱赚商店>购物清单***\n' +
    '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n\n' +
    '----------------------\n' +
    cart.getCartItemsText() +
    '\n----------------------\n' +
    '优惠信息：\n' +
    cart.getPromotionText(strategy) +
    '----------------------\n\n' +
    '总计：' + (cart.getAllSubtotal(strategy) - strategy.savedMoney).toFixed(2) + '(元)\n' +
    '节省：' + strategy.savedMoney.toFixed(2) + '(元)\n' +
    '**********************';
};


module.exports = Printer;


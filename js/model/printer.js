/**
 * Created by joes on 15-2-9.
 */
var moment = require('moment');
function Printer(promotionInfo) {
    this.promotionInfo = promotionInfo;
}

Printer.prototype.toString = function(cart) {

    inventoryText = '***<没钱赚商店>购物清单***\n' +
    '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n\n' +
    '----------------------\n' +
    cart.getCartItemsText() +
    '\n----------------------\n' +
    '优惠信息：\n' +
  //  this.promotionInfo +
    '----------------------\n' +
  //  '总计：' + cart.getPaid().toFixed(2) + '(元)\n' +
   // '节省：' + cart.getPromotionTotalPrice().toFixed(2) + '(元)\n' +
    '**********************';

    return inventoryText;
};
module.exports = Printer;
/*
***<没钱赚商店>购物清单***
打印时间：2014年08月04日 08:09:05

----------------------
名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)
名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)
名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)
名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)

----------------------
    优惠信息：
名称：可口可乐品牌打折，金额：14.00元
名称：满100减3，金额：3.00元

----------------------
    总计：438.00(元)
节省：17.00(元)*/

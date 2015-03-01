var _ = require('lodash');
var Item = require('./item');
function CartItem(item, count) {
    this.item = item;
    this.count = count || 0;
}

/*CartItem.prototype.getSubtotal = function() {

    return this.item.price * this.count;
};*/
CartItem.prototype.toInventoryText = function() {
    var item = this.item;
    return  '名称：' + item.getName() +
            '，数量：' + this.count + this.item.getUnit() +
            '，单价：' + this.item.getPrice().toFixed(2) +
            '(元)，小计：'+ this.getSubtotal().toFixed(2) + '(元)\n'
};

CartItem.prototype.getSubtotal = function () {
    return this.item.getPrice() * this.count;
};

module.exports = CartItem;
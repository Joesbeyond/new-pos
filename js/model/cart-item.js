var _ = require("lodash");
function CartItem(item, count) {
    this.item = item;
    this.count = count || 0;
}

/*CartItem.prototype.getSubtotal = function() {

    return this.item.price * this.count;
};*/
CartItem.prototype.toInventoryText = function() {
    return  '名称：' + this.item.name +
            '，数量：' + this.count + this.item.unit +
            '，单价：' + this.item.price.toFixed(2) +
            '(元)，小计：'+ this.calculateTotal().toFixed(2) + '(元)\n'
};

CartItem.prototype.calculateTotal = function () {
    return this.item.price * this.count;
};
module.exports = CartItem;
function Calculator(item, count) {
    this.item =item;
    this.count = count;
};

Calculator.prototype.calculate = function() {

};
Calculator.prototype.getSubtotal = function() {
    return this.item.price * (this.count - this.getPromotionCount());
};

Calculator.prototype.toInventoryText = function() {
    return  '名称：' + this.item.name +
            '，数量：' + this.count + this.item.unit +
            '，单价：' + this.item.price.toFixed(2) +
            '(元)，小计：'+ this.getSubtotal().toFixed(2) + '(元)\n';
};

Calculator.prototype.getPromotionCount = function() {

};
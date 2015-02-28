var Discount = require('./promotion-decorator');
var StrategyFactory = require('../strategy/strategy-factory');
function BrandDiscount(name, discount, brands) {
    Discount.call(this, name, discount);
    this.brands = brands || [];
}

BrandDiscount.prototype = Object.create(Discount.prototype);
BrandDiscount.prototype.constructor = BrandDiscount;

BrandDiscount.prototype.buildPromotionName = function() {
    return this.name + '品牌打折';
};

BrandDiscount.prototype.getPromotionMoney = function() {
    var strategy = StrategyFactory.createStrategy('strategy1');
    return strategy.getPromotionMoney();
};
module.exports = BrandDiscount;

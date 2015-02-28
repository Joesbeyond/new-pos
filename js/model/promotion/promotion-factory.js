var BrandDiscount = require('./brand-discount');
var FullWithReduced = require('./full-with-reduced');
var PromotionFactory = {
    createPromotion: function(type) {
        var promotionType;
        var brands = [
            '可口可乐'
            // '云山',
            // '康师傅'
        ];
        switch (type) {
            case 'brand':
                promotionType = new BrandDiscount('可口可乐', 0.9, brands);
                break;
            case 'full':
                promotionType = new FullWithReduced('满100减3', 3, 100, ['ITEM000003']);
                break;
        }
        return promotionType;
    }
};

module.exports = PromotionFactory;
var BrandDiscount = require('./brand-discount');
var FullWithReduced = require('./full-with-reduced');
var PromotionFactory = {
    createPromotion: function(type) {
        var promotionType;
        var brands = [
            '可口可乐',
           // '云山',
           // '康师傅'
        ];
        var fullArray = [
            'ITEM000010',
            'ITEM000000',
            'ITEM000005'
        ];
        switch (type) {
            case 'brand':
                promotionType = new BrandDiscount('可口可乐', 0.9, brands);
                break;
            case 'full':
                promotionType = new FullWithReduced('满', 3, 100, fullArray);
                break;
        }
        return promotionType;
    }
};

module.exports = PromotionFactory;
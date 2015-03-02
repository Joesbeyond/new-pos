var BrandDiscount = require('./brand-discount');
var FullWithReduced = require('./full-with-reduced');
var SingleOrBrandDiscount = require('./single-or-brand-discount');
var BrandDiscountDecorator = require('./brand-discount-decorator');
var BrandReduced = require('./brand-reduced');
var SingleReduced = require('./single-reduced');
var PromotionFactory = {
    createPromotion: function(type) {
        var promotionType;
        var brands = [
            '可口可乐'
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
                promotionType = new FullWithReduced('云山荔枝', 3, 100, fullArray);
                break;
            case 'single-brand':
                promotionType = new SingleOrBrandDiscount('可口可乐350ml', 0.95, ['可口可乐'], ['ITEM000000']);
                break;
            case 'brand-discount':
                promotionType = new BrandDiscountDecorator('可口可乐', 0.90, ['可口可乐'], ['ITEM000000']);
                break;
            case 'brand-reduced':
                promotionType = new BrandReduced('康师傅', 2, 100, '康师傅');
                break;
            case 'single-reduced':
                promotionType = new SingleReduced('云山荔枝', 5, 100, 'ITEM000003');
        }
        return promotionType;
    }
};

module.exports = PromotionFactory;
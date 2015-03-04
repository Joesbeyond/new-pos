var BrandDiscount = require('./brand-discount');
var FullWithReduced = require('./full-with-reduced');
var SingleOrBrandDiscount = require('./single-or-brand-discount');
var BrandDiscountDecorator = require('./brand-discount-decorator');
var BrandReduced = require('./brand-reduced');
var SingleReduced = require('./single-reduced');
var SingleAndBrandDiscount = require('./single-and-brand-discount');
var WholeReduced = require('./whole-reduced');
var PromotionFactory = {
    createPromotion: function(type) {
        var promotion;
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
                promotion = new BrandDiscount('可口可乐', 0.9, brands);
                break;
            case 'full':
                promotion = new FullWithReduced('', 3, 100, fullArray);
                break;
            case 'single-or-brand':
                promotion = new SingleOrBrandDiscount('可口可乐350ml', 0.95, ['可口可乐'], ['ITEM000000']);
                break;
            case 'brand-discount':
                promotion = new BrandDiscountDecorator('可口可乐', 0.90, ['可口可乐'], ['ITEM000000']);
                break;
            case 'brand-reduced':
                promotion = new BrandReduced('康师傅', 2, 100, '康师傅');
                break;
            case 'single-reduced':
                promotion = new SingleReduced('云山荔枝', 5, 100, 'ITEM000003');
                break;
            case 'single-and-brand':
                promotion = new SingleAndBrandDiscount('可口可乐', 0.90, ['可口可乐'], ['ITEM000000'], 0.95);
                break;

        }
        return promotion;
    },
    createPromotion2: function(type, savedMoney) {
        var promotion;
        switch (type) {
            case 'whole-reduced':
                promotion = new WholeReduced('', 5, 100, 'ITEM000002', savedMoney);
                break;
        }
        return promotion;
    }
};

module.exports = PromotionFactory;
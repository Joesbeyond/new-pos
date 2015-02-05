/**
 * Created by joes on 15-2-5.
 */
function DiscountPromotion(type, barcodes) {
    Promotion.call(this);
}

DiscountPromotion.prototype = Object.create(Promotion.prototype);
DiscountPromotion.prototype.constructor = DiscountPromotion;
Promotion.loadDiscountPromotion = function() {
    return [
        new DiscountPromotion('SINGLE_DISCOUNT', [//95
            'ITEM000000',
            'ITEM000001',
        ]),
        new DiscountPromotion('BRAND_DISCOUNT', [//90
            'ITEM000000',
            'ITEM000010',
        ]),
        new DiscountPromotion('TOTAL_DISCOUNT', [//90
            'ITEM000002',
            'ITEM000003',
            'ITEM000004',
            'ITEM000005',
            'ITEM000006',
            'ITEM000007',
            'ITEM000008'
        ])
    ];
};

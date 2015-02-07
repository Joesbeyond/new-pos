/**
 * Created by joes on 15-2-5.
 */
function ReturnCoinsPromotion(type, barcodes) {
    Promotion.call(this);
}

ReturnCoinsPromotion.prototype = Object.create(Promotion.prototype);
ReturnCoinsPromotion.prototype.constructor = ReturnCoinsPromotion;
Promotion.loadReturnCoinsPromotion = function() {
    return [
        new ReturnCoinsPromotion('SINGLE_DISCOUNT', [//100-5
            'ITEM000000',
            'ITEM000001',
            'ITEM000002',
            'ITEM000003',
            'ITEM000004',
            'ITEM000005',
            'ITEM000006',
            'ITEM000007',
            'ITEM000008',
            'ITEM000010'
        ]),
        new ReturnCoinsPromotion('BRAND_DISCOUNT', [//100-2
            'ITEM000000',
            'ITEM000010',
            'ITEM000002',
            'ITEM000003',
            'ITEM000005',
            'ITEM000008'
        ]),
        new ReturnCoinsPromotion('TOTAL_DISCOUNT', [
            'ITEM000000',
            'ITEM000001',
            'ITEM000002',
            'ITEM000003',
            'ITEM000004',
            'ITEM000006',
            'ITEM000007',
            'ITEM000008',
            'ITEM000010'
        ])
    ];
};

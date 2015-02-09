/**
 * Created by joes on 15-2-5.
 */
function ReturnCoinsPromotion(type, barcodes) {
    Promotion.call(this);
}

ReturnCoinsPromotion.prototype = Object.create(Promotion.prototype);
ReturnCoinsPromotion.prototype.constructor = ReturnCoinsPromotion;



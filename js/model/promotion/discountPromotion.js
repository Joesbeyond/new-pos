function DiscountPromotion(type, barcodes) {
    Promotion.call(this);
}

DiscountPromotion.prototype = Object.create(Promotion.prototype);
DiscountPromotion.prototype.constructor = DiscountPromotion;


var _ = require('lodash');
var Item = require('./item');
var CartItem = require('./cart-item');
var Promotion  = require('./promotion/promotion');
function Cart() {
    this.cartItems = [];
};

Cart.prototype.getCartItems = function(inputs){
    var cartItems = this.cartItems;
    _.forEach(inputs, function (input) {
        cartItems.push(Cart.getCartItem(input));
    });
    return cartItems;
};

Cart.getCartItem = function(input) {
    var cartItem;
    for(var i in input) {
        var item = Item.findItemByBarcode(i);
        cartItem = new CartItem(item, input[i]);
    }
    return cartItem;
};

Cart.prototype.getCartItemsText = function() {
    var cartItemsText = '';
    _.forEach(this.cartItems, function(cartItem) {
        cartItemsText += cartItem.toInventoryText();
    });
    return cartItemsText;
};

Cart.prototype.getPromotionText = function(strategy) {
    return strategy.getPromotionInfo(this.cartItems);
};

Cart.prototype.getPaidMoney = function(strategy) {
    return (this.getAllSubtotal() - this.getSavedMoney());
};

Cart.prototype.getSavedMoney = function(strategy) {
    return strategy.savedMoney;
};

Cart.prototype.getAllSubtotal = function() {
    var totalMoney = 0;
    _.forEach(this.cartItems, function(cartItem) {
        var count = cartItem.count;
        var price = cartItem.item.getPrice();
        totalMoney += count * price;
    });
    return totalMoney;
};

module.exports = Cart;
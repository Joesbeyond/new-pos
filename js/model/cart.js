var _ = require('lodash');
var Item = require('./item');
var CartItem = require('./cart-item');
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

module.exports = Cart;
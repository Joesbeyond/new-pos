/**
 * Created by joes on 15-2-5.
 */
var Cart = require('./model/cart');
var CartItem = require('./model/cart-item');
var Printer = require('./model/printer');
function printInventory(input) {
    var cart = new Cart();
    var cartItems = cart.getCartItem(input);
    new CartItem(cartItems.item, cartItems.count);
    var inventory = new Printer();
    console.log(inventory.toString(cart));

}

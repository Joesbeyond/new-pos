/**
 * Created by joes on 15-2-5.
 */
var Cart = require('./model/cart');
var CartItem = require('./model/cart-item');
var Printer = require('./model/printer');
var input = [
    {'ITEM000003': 2},
    {'ITEM000004': 2}
];
function printInventory(input) {
    var cart = new Cart();
    var cartItems = cart.getCartItems(input);
    new CartItem(cartItems.item, cartItems.count);
    var printer = new Printer();
    console.log(printer.toString(cart));

}
printInventory(input);
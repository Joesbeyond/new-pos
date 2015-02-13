/**
 * Created by joes on 15-2-5.
 */
var Cart = require('./model/cart');
var CartItem = require('./model/cart-item');
var Printer = require('./model/printer');
var BrandDiscount = require('./model/promotion/brand-discount');
var Item = require('./model/item');
var PromotionFactory = require('./model/promotion/promotion-factory');
var input = [
    { 'ITEM000000' : 20 },
    { 'ITEM000010' : 20 },
    { 'ITEM000005' : 30 },
    { 'ITEM000003' : 12 }
];


function printInventory(input) {

    var cart = new Cart();
    var cartItems = cart.getCartItems(input);
   // var brandDisount = new BrandDiscount('可口可乐品牌打折', 0.9, brands);
    var brandDisount = PromotionFactory.createPromotion('brand');
    var brad = brandDisount.getPromotionString(cartItems);

    var printer = new Printer(brad);
    console.log(printer.toString(cart));

}
printInventory(input);
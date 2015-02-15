/**
 * Created by joes on 15-2-5.
 */
var Cart = require('./model/cart');
var CartItem = require('./model/cart-item');
var Printer = require('./model/printer');
var BrandDiscount = require('./model/promotion/brand-discount');
var Item = require('./model/item');
var PromotionFactory = require('./model/promotion/promotion-factory');
var Promotion = require('./model/promotion/promotion');
var input = [
    { 'ITEM000000' : 20 },
    { 'ITEM000010' : 20 },
    { 'ITEM000005' : 30 },
    { 'ITEM000003' : 12 }
];


function printInventory(input) {

    var cart = new Cart();
    var cartItems = cart.getCartItems(input);

    var brandDisount = PromotionFactory.createPromotion('brand');
    var brand = brandDisount.getPromotionString(cartItems);

    var printer0 = new Printer(brand);
    console.log(printer0.toString(cart));


    var fullDisount = PromotionFactory.createPromotion('full');
    var full = fullDisount.getPromotionString(cartItems);
    var printer = new Printer(full);


    console.log(printer.toString(cart));

}
printInventory(input);

var Cart = require('./model/cart');
var InitPromotion = require('./model/promotion/initPromotion');
//var CartItem = require('./model/cart-item');
//var Printer = require('./model/printer');
var BrandDiscount = require('./model/promotion/brand-discount');
//var Item = require('./model/item');
//var PromotionFactory = require('./model/promotion/promotion-factory');
//var Promotion = require('./model/promotion/promotion');
var input = [
    { 'ITEM000000' : 20 },
    { 'ITEM000010' : 20 },
    { 'ITEM000005' : 30 },
    { 'ITEM000003' : 12 }
];

printInventory(input);

function printInventory(input) {

    var cart = new Cart();
    var cartItems = cart.getCartItems(input);
    var brandDiscount = new BrandDiscount(cartItems);
    console.log(brandDiscount.getPromotionString());
   // var initPromotion = new InitPromotion();
    //var brandDiscount = new BrandDiscount(initPromotion, cartItems);
    //console.log(cartItems);
   // var brandDisount = PromotionFactory.createPromotion('brand');
   // var brand = brandDisount.getPromotionString(cartItems);

   // var printer = new Printer(brand);
   // console.log(printer.toString(cart));


}

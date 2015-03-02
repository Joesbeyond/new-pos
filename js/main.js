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
var StrategyFactory = require('./model/strategy/strategy-factory');
var input = [
    { 'ITEM000000' : 20 },
    { 'ITEM000010' : 20 },
    { 'ITEM000005' : 30 },
    { 'ITEM000008' : 25 },
    { 'ITEM000003' : 8  },
    { 'ITEM000002' : 14 }
]

printInventory(input);
function printInventory(input) {

    var cart = new Cart();
    var cartItems = cart.getCartItems(input);
    var strategy = StrategyFactory.createStrategy('strategy2');
    var printer = new Printer();
    var inventory = printer.toString(cart, strategy);
    console.log(inventory);

}

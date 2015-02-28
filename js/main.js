
var Cart = require('./model/cart');
var Printer = require('./model/printer');
var Promotion = require('./model/promotion/promotion');
var StrategyFactory = require('./model/strategy/strategy-factory');
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
    var strategy = StrategyFactory.createStrategy('strategy1');
    //console.log(strategy);
    var printer = new Printer();
    console.log(printer.toString(cart, strategy, cartItems));
}

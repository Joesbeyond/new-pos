
var Cart = require('./model/cart');
var Printer = require('./model/printer');
var Promotion = require('./model/promotion/promotion');
var StrategyFactory = require('./model/strategy/strategy-factory');
var input = [
        /*strategy3{ 'ITEM000000' : 20 },
        { 'ITEM000010' : 30 },
        { 'ITEM000005' : 30 },
        { 'ITEM000008' : 25 },
        { 'ITEM000003' : 8  },
        { 'ITEM000002' : 14 }*/

        { 'ITEM000000' : 20 },
        { 'ITEM000010' : 30 },
        { 'ITEM000001' : 30 },
        { 'ITEM000007' : 40 },
        { 'ITEM000003' : 8  },
        { 'ITEM000002' : 14 },

printInventory(input);

];

printInventory(input);
function printInventory(input) {
    var cart = new Cart();
    var cartItems = cart.getCartItems(input);
<<<<<<< HEAD
    var strategy = StrategyFactory.createStrategy('strategy1');
    //console.log(strategy);
    var printer = new Printer();
    console.log(printer.toString(cart, strategy, cartItems));
=======
    var strategy = StrategyFactory.createStrategy('strategy4');
    var printer = new Printer();
    var inventory = printer.toString(cart, strategy);
    console.log(inventory);

>>>>>>> new_branch_name
}

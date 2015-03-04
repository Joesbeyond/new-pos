var Strategy_1 =require('./strategy-1');
<<<<<<< HEAD
//var Strategy_2 =require('./strategy-2');
//var Strategy_3 =require('./strategy-3');
//var Strategy_4 =require('./strategy-4');
=======
var Strategy_2 =require('./strategy-2');
var Strategy_3 =require('./strategy-3');
var Strategy_4 =require('./strategy-4');
>>>>>>> new_branch_name

var StrategyFactory = {
    createStrategy: function(type) {
        var strategyType = '';
        switch (type) {
            case 'strategy1':
<<<<<<< HEAD
                strategyType = new Strategy_1()
            /*case 'strategy2':
                strategyType = new Strategy_2();
            case 'strategy3':
                strategyType = new Strategy_3();
            case 'strategy4':
                strategyType = new Strategy_4();*/
=======
                strategyType = new Strategy_1();
                break;
            case 'strategy2':
                strategyType = new Strategy_2();
                break;
            case 'strategy3':
                strategyType = new Strategy_3();
                break;
            case 'strategy4':
                strategyType = new Strategy_4();
                break;
>>>>>>> new_branch_name
        }
        return strategyType;
    }
};

module.exports = StrategyFactory;
function Beverage(name) {
    this._name = name || 'Dark Roast';
    this.cost = function () {
        return 0.99;
    };
    this.name = function () {
        return this._name;
    };
}

/*Decorator 1*/
function addMocha(beverage) {
    // has-a 
    var previousCost = beverage.cost();
    beverage.cost = function () {
        return previousCost + 0.20;
    }
    var previousName = beverage.name();
    beverage.name = function () {
        return previousName + " / with Mocha";
    };
}

/*Decorator 2*/
function addWhip(beverage) {
    // has-a 
    var previousCost = beverage.cost();

    beverage.cost = function () {
        return previousCost + 0.10;
    };
    var previousName = beverage.name();
    beverage.name = function () {
        return previousName + " / with Whip";
    };
}

/*Decorator 3*/
function addSuperSize(beverage) {
    var previousCost = beverage.cost();
    beverage.cost = function () {
        return previousCost + 1.00;
    };
    var previousName = beverage.name();
    beverage.name = function () {
        return previousName + " / with Up Size";
    };
}

var type = " Beverage";


Beverage.prototype.getDesc = function () {

    var _price = this.getPrice();
    if (this.base != null)
        _price = (this.base.price + _price);
    console.log("this.price = " + _price);
    return this.name + ' $' + _price + ' ' + type;
};



/*var mb = new Beverage();
console.log("Initial cost " + mb.cost());
// add memory
Mocha(mb);
console.log("with Mocha " + mb.cost());
// add encraving
Whip(mb);
console.log("with Whip " + mb.cost());
// add insurance
SuperSize(mb);
console.log("with SuperSize " + mb.cost());*/

console.log(mb.cost()); //1522
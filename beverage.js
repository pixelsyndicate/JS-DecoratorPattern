function Beverage(name,price) {
    this._name = name || 'Dark Roast';
    this.cost = function () {
        return price || 0.89;
    };
    this.name = function () {
        return this._name;
    };
}

/*Decorator 1*/
function addMocha(beverage) {
    // has-a 
    var addOnName = " / with Mocha";
    var previousBeverage = beverage;
    var previousCost = previousBeverage.cost();
    beverage.cost = function () {
        return previousCost + 0.20;
    }
    var previousName = previousBeverage.name();
    beverage.name = function () {
        return previousName + addOnName;
    };
}

/*Decorator 2*/
function addWhip(beverage) {
    // has-a 
    var previousBeverage = beverage;

    // additional features
    var addOnCost = 0.10;
    var addOnName = " / with Whip";

    // change the beverage
    var previousCost = previousBeverage.cost();
    beverage.cost = function () {
        return (previousCost + addOnCost);
    };
    var previousName = previousBeverage.name();
    beverage.name = function () {
        return previousName + addOnName;
    };
}

/*Decorator 3*/
function addSuperSize(beverage) {
    var addOnName = " / with UpSize";
    var previousBeverage = beverage;
    var previousCost = previousBeverage.cost();

    // adjust the beverage
    beverage.cost = function () {
        return previousCost + 0.99;
    };
    var previousName = previousBeverage.name();
    beverage.name = function () {
        return previousName + addOnName;
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

interface ICoffee {
  getCost(): number;
  getDescription(): string;
}
class SimpleCoffee implements ICoffee {
  getCost=()=> 10;
  getDescription=()=> "Simple coffee";
}
class MilkCoffee implements ICoffee {
    protected coffee;
    constructor(coffee:ICoffee) {
        this.coffee = coffee;
    }
    getCost=()=>this.coffee.getCost()+2;
    getDescription = () => this.coffee.getDescription() + ', milk'

}
class WhipCoffee implements ICoffee {
    protected coffee;
    constructor(coffee:ICoffee) {
        this.coffee = coffee;
    }
    getCost = () => this.coffee.getCost() + 5;
    getDescription = () => this.coffee.getDescription() + ', whip'

}

class VanillaCoffee implements ICoffee {
    protected coffee;
    constructor(coffee:ICoffee) {
        this.coffee = coffee;
    }
    getCost = () => this.coffee.getCost() + 3;
    getDescription = () => this.coffee.getDescription() + ', vanilla'

}

export default function sampleDecorator() {
    let someCoffee = new SimpleCoffee();
    console.log(someCoffee.getCost());
    console.log(someCoffee.getDescription());

    someCoffee = new MilkCoffee(someCoffee);
    console.log(someCoffee.getCost());
    console.log(someCoffee.getDescription());

    someCoffee = new WhipCoffee(someCoffee);
    console.log(someCoffee.getCost());
    console.log(someCoffee.getDescription());

    someCoffee = new VanillaCoffee(someCoffee);
    console.log(someCoffee.getCost());
    console.log(someCoffee.getDescription());
}

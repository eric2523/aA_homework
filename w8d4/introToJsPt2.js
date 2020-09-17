function titleize(arrOfNames, printCallback) {
    const titleizedNames = arrOfNames.map(name => `Mx. ${name} Jingleheimer Schmidt`)
    titleizedNames.forEach(ele => printCallback(ele))
    return titleizedNames;
}

// const printCallback = (ele) => console.log(ele);
// titleize(["Mary", "Brian", "Leo"], printCallback);

function Elephant (name, height, arrOfTricks) {
    this.name = name;
    this.height = height;
    this.tricks = arrOfTricks;
}

Elephant.prototype.trumpet = () => console.log(`${this.name} the elephant goes phrRRRRR!!!!`)
Elephant.prototype.grow = () => this.height += 12;
Elephant.prototype.addTrick = trick => this.tricks.push(trick)
Elephant.prototype.play = function() {
    let randomNum = () => {
        return Math.floor(Math.random() * Math.floor(this.tricks.length));
    }
    console.log(this.tricks[randomNum()]);
}
Elephant.paradeHelper = function(elephant) {
    console.log(`${elephant.name} is trotting by!`)
}

function dinnerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please";
    console.log(order)
    return function (food) {
        let beginning = order.slice(0, order.length - 8)
        let end = order.slice(order.length - 8)
        order = (`${beginning} and ${food}${end}`);
        console.log(order);
    }
}

// let bfastOrder = dinnerBreakfast() 
// bfastOrder("chocolate chip pancakes")
// bfastOrder("chocolate bip")

// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

// let herd = [ellie, charlie, kate, micah];

// let stampede = function (herd) {
//     herd.forEach((ele) => Elephant.paradeHelper(ele));
// }
// stampede(herd);

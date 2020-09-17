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

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes phrRRRRR!!!!`)
}

Elephant.prototype.grow = function() {
    this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick)
}

Elephant.prototype.play = function() {
    let randomNum = () => {
        return Math.floor(Math.random() * Math.floor(this.tricks.length));
    }
    console.log(this.tricks[randomNum()]);
}

// let elephant1 = new Elephant("eric", 12, ["chomp"]);
// elephant1.grow();
// console.log(elephant1.height)
// elephant1.addTrick("says hi");
// elephant1.addTrick("says byei");
// console.log(elephant1.tricks);
// elephant1.play();
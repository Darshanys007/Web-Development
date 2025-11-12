// let obj = {
//     a:"Harry",
//     b:"Potter"
// }
// console.log(obj)

// let animal = {
//     eats:true
// };
// let rabbit = {
//     jumps:true
// };
// rabbit.__proto__ = animal;  //sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is  created")
    }
    eats() {
        console.log("I am eating")
    }
    jumps() {
        console.log("I am jumping")
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created by the by I am Lion")
    }
    eats() {
        super.eats()
        console.log("I am eating Dear!!")
    }
}
let a = new Animal("Darshan");
console.log(a)

let l = new Lion("I am Lion");
console.log(l)
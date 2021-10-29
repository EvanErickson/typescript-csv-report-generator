function Dog(name){
    this.name = name;
}

var dog = new Dog('Lucky');
console.log(dog.name)


Dog.prototype.bark = function bark(){
    console.log('Bark')
}
console.log(dog.bark)


export class Dog(name) {
    this.name = name
}


"use strict";
var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    return Dog;
}());
var dog = new Dog('Evan', 28);
console.log(dog);
function newFunc(pet) {
    console.log(pet);
}

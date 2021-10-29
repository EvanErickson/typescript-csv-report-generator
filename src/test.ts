interface Pet {
    name: string,
    age: number
}

class Dog implements Pet {
    constructor(public name: string, public age: number){}

    pet(): Pet
}

var dog = new Dog('Evan', 28);
console.log(dog)

function newFunc(pet: Pet){
    console.log(pet)
}
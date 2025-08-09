"use strict";
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log("Phát ra âm thanh");
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
class Dog extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Woof!!");
    }
}
class Cat extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Meow!!");
    }
}
class Rabbit extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Squeak!!");
    }
}
let randomAnimal = new Animal("animal", 10, "Mamal");
console.log(randomAnimal.getName());
console.log(randomAnimal.getAge());
console.log(randomAnimal.species);
randomAnimal.speak();
let dog = new Dog("John", 20, "Mamal", "pug");
console.log(dog.getName());
console.log(dog.getAge());
console.log(dog.species);
console.log(dog.breed);
console.log(dog.speak());

class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    // ...
  }
  sleep() {
    // ...
  }
}
class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);
    this.breed = breed;
  }
  bark() {
    console.log('Woof Woof!');
    this.energy -= 1;
  }
}
let myDog = new Dog('Fluffy', 40, 'Bulldog');
myDog.bark();
console.log(myDog.breed, myDog.energy);


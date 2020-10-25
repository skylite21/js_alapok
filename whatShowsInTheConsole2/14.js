class Dog {
  constructor(name, energy, breed) {
    this.breed = breed;
    this.energy = energy;
  }
  bark() {
    console.log('Woof Woof!');
    this.energy -= 1;  
  }
}
let myDog = new Dog('Fluffy', 40, 'Bulldog');
myDog.bark();
console.log(myDog.breed, myDog.energy);


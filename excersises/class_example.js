// 1. készíts egy autó osztályt, az alábbi metódusokkal:
//  - addPassanger: hozzáad egy utast az utasokhoz (de max 5 lehet!)
//  - printAllinfo: kiír minden információt (km óra, tank, utasok, rendszám)
//  - going(kilóméter) : növeli a kilóméterórát és csökkenti a tankot
//  - az autó osztály konstruktor-a egy string-et, az autó rendszámát használja fel


// megoldás:

class Car {
  constructor(plate, color) {
    this.tank = 70; // 70 liter a tank
    this.plate = plate,
    this.color = color;
    this.consumption = 5; //5liter/100kilomete
    this.passengers = [];
    Object.defineProperty(this, 'wheelsCount', {
      value:4,
      writable:false,
      enumerable:true,
      configurable:true
    });
    if (!this.color) {
      this.color = 'white'; 
    } 
  }
  going(kilometers) {
    let consPerKm = this.consumption / 100;
    if (this.tank <=0) {
      return console.log('A tank ures, nem mehet az autó');
    }
    while (kilometers>=0) {
      kilometers = kilometers - 1;
      this.tank = this.tank - consPerKm; 
    }
    let tankLeft = Math.round(this.tank * 100) / 100;
    console.log(this.plate+' rendszámú autó tankjában '+tankLeft+'liter üzemanyag maradt');
  }
  printAllInfo() {
    console.log('az auto rendszáma: '+this.plate);
    console.log('az auto színe: '+this.color);
    console.log('az auto tankja: '+this.tank);
    console.log('az auto fogyasztása: '+this.consumption);
    console.log('az auto kerekeinek száma: '+this.wheelsCount);
  }
  addPassenger(name, sex){
    if (this.passengers.length >= 5) {
      return console.log('Nem fér több ember az autóba');
    } else {
      let passenger = {
        'name': name,
        'sex': sex
      };
      this.passengers.push(passenger);
    }
  }
}

let myCar = new Car('mca-175');
myCar.printAllInfo();
myCar.addPassenger('John', 'Boy');
myCar.addPassenger('Cate', 'Girl');
myCar.addPassenger('Bruno', 'Boy');
myCar.addPassenger('Samanta', 'Girl');
myCar.addPassenger('Tim', 'Boy');
myCar.addPassenger('Roger', 'Boy');
myCar.going(50);

var passangersPrint = myCar.passengers.map( function(passenger, index) {
  return (index+1)+'. '+passenger.name + ' is a '+passenger.sex+' passenger';
});
console.log(passangersPrint);

class CrazyCar extends Car {
  constructor(plate, color) {
    super(plate, color);
    Object.defineProperty(this, 'wheelsCount', {
      value:4,
      writable:true,
      enumerable:true,
      configurable:false
    });
  }
}
let myCrazyCar = new CrazyCar('EEEE2222', 'Purple');
myCrazyCar.wheelsCount = 7;
myCrazyCar.printAllInfo();

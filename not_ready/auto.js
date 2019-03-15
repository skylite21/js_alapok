// 1. készíts egy autó osztályt, az alábbi metódusokkal:
//  - addPassanger: hozzáad egy utast az utasokhoz (de max 5 lehet!)
//  - printAllinfo: kiír minden információt (km óra, tank, utasok, rendszám)
//  - going(kilóméter) : növeli a kilóméterórát és csökkenti a tankot


class Car {
  constructor(plate) {
    this.plate = plate;
    this.tank = 70;
    this.consumption = 5; // 5l fogy 100km-enként
    this.passangers = [];
    // kilométerora:
    this.mileageHour = 0;
    Object.defineProperty(this, 'numOfPassangers', {
      value: 5,
      writable: false,
      enumerable: true,
      configurable: false
    });
  }
  //  - addPassanger: hozzáad egy utast az utasokhoz (de max 5 lehet!)
  addPassanger(name, age) {
    if( this.numOfPassangers <= this.passangers.length ) {
      console.log('az auto tele van');
    } else {
      const passanger = {
        "name": name,
        "age": age
      }
      this.passangers.push(passanger);
    }
  }
  //  - printAllinfo: kiír minden információt (km óra, tank, utasok, rendszám)
  printAllinfo() {
    console.log('Az autó rendszáma: '+this.plate);
    console.log('Az autóban utazók: '+JSON.stringify(this.passangers));
    console.log('Az autó tankja: '+this.tank);
    console.log('Az autó kilóméter órájának állása: : '+this.mileageHour);
  }
  //  - going(kilóméter) : növeli a kilóméterórát és csökkenti a tankot
  going(kilometers) {
    let consPerKm = this.consumption / 100;
    let kmsToGo = 0;
    // összes üzemanyag ammenyibe kerül az aktuális utazás:
    let gasToConsume = (this.consumption * kilometers) / 100;
    console.log(gasToConsume+' liter üzemanyagba kerül a '+kilometers+' km. hosszú ut' );
    if (this.tank <= 0 ) {
      return console.log('a tank üres, fuck you');
    }
    while( kilometers >= 0 && this.tank >= consPerKm) {
      if (gasToConsume >= this.tank ) {
        gasToConsume = this.tank;
      }
      kmsToGo++;
      kilometers --;
      this.tank = this.tank - consPerKm;
    }
    this.mileageHour += kmsToGo;
    console.log('az autó'+kmsToGo+' km-t utazott');
  }
}
let myCar = new Car('asd-123');
myCar.addPassanger('bela', 23);
myCar.going(1500);
myCar.printAllinfo();

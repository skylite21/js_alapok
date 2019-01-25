
const spaceShip = {
  fuel: 400,
  passangers: ['john', 'steve', 'samanta', 'danielle'],
  shields: true,
  speedometer: 0,
  addPassangers: function(newPassanger) {
    this.passangers.push(newPassanger);
    console.log(newPassanger+' was added to the ship');
  },
  listPassangers: function() {
    for (let name of this.passangers) {
      console.log('passanger: '+name);
    }
  },

  travel: function(distance) {
    console.log('trying to travel: '+distance);
    if(this.fuel === 0) {
      console.log('cant go further, tank is empty');
    } else {
      this.fuel = this.fuel - distance / 2;
      if(this.fuel < 0) {
        distance = distance - (this.fuel * -2);
        console.log('can only travel:' +distance); 
        this.fuel = 0;
      }
      this.speedometer += distance;
      if (this.fuel <= 30 && this.shields) {
        console.log('fuel is low, turning off shields...');
        this.shields = false;
      }
      console.log('the SpaceShip is at:' +this.speedometer);
      console.log('the spaceship has: '+this.fuel+' fuel');
    }
  }
};

spaceShip.listPassangers();
spaceShip.addPassangers('Lindsay');
spaceShip.listPassangers();
spaceShip.travel(750);
spaceShip.travel(200);
spaceShip.travel(100);

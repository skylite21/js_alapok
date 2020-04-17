// a this keyword általánosságban mindíg egy olyan objektumot jelent
// az adott kontextusban. Hogy mi épp az adott kontextus, pl a böngészőben
// ha csak megnézed a 
// console.log(this);
// sort, akkor az a window object lesz...

// egy class-on belül a this, mindíg a példányosított konkrét objektumot jelenti
// mikor már példányosítottuk...

// if we want to see the 'this' keyword in nodejs, we have to wrap everything inide an IIFE
(function() {

  // https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs
  // console.log(this);

  let myObj = {
    name: 'John',
    myMethod: function() {
      // a this kulcsszó itt a myObj-re utal
      console.log('this keyword in the object: ', this);
    },
    myShit: function() {
      console.log('myshi');
      function myInnerFunc() {
        // function inside a method refers to the window object again! insane!!
        console.log(this);
      }
      // arrow functions dont have their own 'this' keyword, so when using arrow functions
      // we still have 'this' as the current object: myObj
      let myInnerArrowFunc = () => {
        console.log('this keyword insinde an arrow function:', this);
      };
      myInnerFunc();
      myInnerArrowFunc();
    }
  };
  myObj.myMethod();
  myObj.myShit();

}());

// only nodejs
// console.log(global);
// console.log(process);

// in the browser, the 'this' keyword refers to the window object

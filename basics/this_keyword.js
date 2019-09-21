
// if we want to see the 'this' keyword in nodejs, we have to wrap everything inide an IIFE
(function() {

  // https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs
  // console.log(this);

  let myObj = {
    name: 'John',
    myMethod: function() {
      console.log(this);
    },
    myShit: function() {
      console.log('myshi');
      function myInnerFunc() {
        // function inside a method refers to the window object again!!!
        console.log(this);
      }
      // arrow functions dont have their own 'this' keyword, so when using arrow functions
      // we still have 'this' as the current object
      let myInnerArrowFunc = () => {
        console.log(this);
      };
      myInnerFunc();
      myInnerArrowFunc();
    }
  };
  // myObj.myMethod();
  myObj.myShit();

}());


// only nodejs
// console.log(global);
// console.log(process);

// in the browser, the 'this' keyword refers to the window object

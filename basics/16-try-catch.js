


function tryTest() {
  // a try blokkban lévő kód ha bármilyen hibát dob amitől kiakadna az egész app
  // ez nem fog megtörténni hanem helyette a catch-ben lévő kód fog lefutni
  try {
    nonExistingFunction();
  } catch(e) {
    // a catch-ben lévő 'e' paraméter valójában magát a error-t tartalmazza amit
    // akár használhatunk is arra hogy megnézzük mi volt a hiba és attol függően
    // kezeljük le a hibát
    // console.log(e);
    console.log('oops! Something went wrong...');
  }
}
tryTest();


// a try - catch végre kerülhet egy opcionális finally is:
// a finally-ban lévő kód mindíg lefut (még akkor is ha van egy return a catch-ben

function myTest() {
  try {
    nonExistingFunction();
  } catch {
    console.log('Yieks!');
    return;
  } finally {
    console.log('this will run!');
  }
  console.log('this will not run');
}
myTest();


//https://levelup.gitconnected.com/5-things-you-dont-know-about-try-catch-finally-in-javascript-5d661996d77c

// https://stackoverflow.com/questions/9687849/what-is-the-point-of-finally-in-a-try-catch-except-finally-statement

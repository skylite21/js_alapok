
const TAX = 0.27;

function add_two(a,b) {
  return a + b;
}

function gross(price, tax) {
  return price * (1 + tax);
}

function getTotal() {

  return quantity * price;
}

const productPrice = 10;
const productQuantity = 2;
const shipping = 5;

const myTotal = gross(add_two(getTotal(productQuantity, productPrice), shipping), TAX);
console.log(myTotal);

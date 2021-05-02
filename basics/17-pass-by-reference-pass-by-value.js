

const phoneNum = '123-123-123';

function clearDashes(phoneNumber) {
  phoneNumber.replace('-', '');
}

clearDashes(phoneNum);
console.log(phoneNum);


const myArr = [3,4,5];

// objects are passed by reference!
function zero(arr) {
  for (let i=0; i<arr.length; i++) {
    arr[i] = 0;
  }
}

zero(myArr);
console.log(myArr);


const getUserData = function() {
  const data = {
    age: 16,
    weight: 50,
    hair: 'brown'
  };

  console.log(data);
  return data;
};

getUserData();

console.log(getUserData);

// IIFE
const user = (function(){
  const userName = 'John';
  console.log(`you are logged in as ${userName}`);
  // console.log('you are logged in as '+userName);
  return userName;
})();
console.log(user);

(function getUserRole() {
  const userRole = 'admin';
  console.log(`user role is ${userRole}`);
  return userRole;
})();


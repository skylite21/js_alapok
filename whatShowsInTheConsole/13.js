
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


const user = (function(){
  const user = 'John';
  console.log(`you are logged in as ${user}`);
  return user;
})();
console.log(user);

(function getUserRole() {
  const userRole = 'admin';
  console.log(`user role is ${userRole}`);
  return userRole;
})();

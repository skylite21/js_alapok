let score = 6;
let player = {
  name: 'John',
  city: 'Budapest'
};
function changeThings(s, obj) {
  s = 50;
  obj.city = 'London';
}
changeThings(score, player);
console.log(score);
console.log(player.city);


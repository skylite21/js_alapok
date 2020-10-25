const barker = (state) => ({
  bark: () => console.log('Woof, I am '+state.name)
});
const driver = (state) => ({
  drive: () => console.log('Driving, I am '+state.name)
});
const killer = (state) => ({
  kill: () => console.log('Killing, I am '+state.name)
});

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  };
  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state)
  );
};
let a = murderRobotDog('Kyle');
a.bark();
console.log(a);

let b = murderRobotDog('Stan');
b.speed = 50;
console.log(b);
console.log(a);


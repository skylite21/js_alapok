
function getRandomDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(value => console.log(value.message));
}
getRandomDogImage();

async function getRandomDogImage2() {
  let response = await fetch('https://dog.ceo/api/breeds/image/random');
  let value = await response.json();
  console.log(value.message);
}
getRandomDogImage2();

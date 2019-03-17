function getFirstImage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('image1.jpg'), 1000);
  });
}

function getSecondImage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('image2.jpg'), 3000);
  });
}

function getThirdImage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('image3.jpg'), 2000);
  });
}
Promise.all([getFirstImage(), getSecondImage(), getThirdImage()]).then( images => console.log(images) );

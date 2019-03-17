const req = new XMLHttpRequest();
req.open('GET', 'https://dog.ceo/api/breeds/list/all');
req.onreadystatechange = function() {
  if (req.readyState === XMLHttpRequest.DONE) {
    const response = JSON.parse(req.responseText);
    const breeds = Object.keys(response.message);
    console.log(breeds[0]);
  }
}
req.send();

function displayImage(image) {
  console.log(image);
}


function downloadImage(id, callback) {
  var req = new XMLHttpRequest();
  req.overrideMimeType("application/json");
  req.open('GET', 'https://jsonplaceholder.typicode.com/photos/'+id, true);
  req.onload  = function() {
    var jsonResponse = JSON.parse(req.responseText);
    callback(jsonResponse);
  };
}

const image = downloadImage(3, displayImage);

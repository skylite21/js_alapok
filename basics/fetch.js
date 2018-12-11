
// fetch with Promises
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) 
  .then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
  })
  .catch(error => console.error(error))



// fetch with async function
const request = async () => {
     const response = await fetch('http://httpstat.us/500');
     const json = await response.json(); // https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
     console.log(json);
 }
request();




// fetch async function and error handling
const requestAndHandleErrors = async () => {
  try {
        const response = await fetch('http://httpstat.us/500'); // https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
        const json = await response.json();
        console.log(json);
      } catch(e) {
        // here we also get an error but we know whats wrong and can handle the error properly
        // for example a popup box
          return console.log(`Unexpected error occurred: ${e}`);
      }
}
requestAndHandleErrors();

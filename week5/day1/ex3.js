// Resolving with value 3
let resolvedPromise = Promise.resolve(3);
resolvedPromise.then(value => console.log(value)); 

// Rejecting with "Boo!"
let rejectedPromise = Promise.reject("Boo!");
rejectedPromise.catch(error => console.log(error));  
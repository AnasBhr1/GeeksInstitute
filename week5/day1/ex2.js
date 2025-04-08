let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
  
  // Using the promise
  promise.then(result => console.log(result));
  
// console.log("hii");
// console.log("good");
// console.log("bye");

// console.log("hiii");
// setTimeout(()=>{
//    console.log("good");
// },1000);
// console.log("bye");

// JavaScript Promises make handling asynchronous operations
//  like API calls,file loading, or time delays easier.
// It can be in one of three states -

//  - Pending: The task is in the initial state.
//  - Fulfilled: The task was completed successfully, and the result is available.
//  - Rejected: The task failed, and an error is provided.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is the eventual value the promise will return");
  }, 5000);
});
// Logging the promise object directly will show its pending state, not the resolved value.
console.log(myPromise);

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("error----", err);
  });

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}
fetchData()
  .then((response) => {
    console.log(response);
  })
  .catch(error => {
    console.log("error----",error);
  });

const promise = new Promise(function (resolve, reject) {
  let randNum = Math.random();
  console.log(randNum);
  if (randNum >= 0.5) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally((secResult) => console.log("It worked"));
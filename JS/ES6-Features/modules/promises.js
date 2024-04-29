import fetch from "node-fetch";

const getUserData = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
console.log("Loading....");
getUserData(1)
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Loading Done....");
  });

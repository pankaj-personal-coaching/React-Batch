import fetch from "node-fetch";

const getUserData = async (userId) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    // let data = await response.json();
    throw new Error("We are just testing error in async/await");
    // return data;
  } catch (error) {
    return error;
  }
};
console.log("Loading....");
getUserData(1)
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log(JSON.stringify(error.message));
  })
  .finally(() => {
    console.log("Loading Done....");
  });

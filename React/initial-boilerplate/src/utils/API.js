export const getData = (url, options = {}) => {
  return new Promise((res, rej) => {
    fetch(url, options)
      .then((result) => {
        return result
          .json()
          .then((data) => {
            res(data);
          })
          .catch((err) => {
            rej(err);
          });
      })
      .catch((err) => {
        rej(err);
      });
  });
};

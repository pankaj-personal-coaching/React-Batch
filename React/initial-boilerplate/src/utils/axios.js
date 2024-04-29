import axios from "axios";
export const getDataAxios = (url, options = {}) => {
  return new Promise((res, rej) => {
    return axios
      .get(url, options)
      .then((result) => {
        res(result.data);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

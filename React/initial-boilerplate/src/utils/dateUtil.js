export const formatDate = (date) => {
  let d = date ? new Date(date) : new Date();
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

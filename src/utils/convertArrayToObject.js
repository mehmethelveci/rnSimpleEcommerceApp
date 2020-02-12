const convertArrayToObject = (array, key) => array.reduce(
  (obj, item) => ({
    ...obj,
    [item[key]]: item,
  }),
  {},
);

export default convertArrayToObject;

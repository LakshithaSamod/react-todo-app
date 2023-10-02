const isEmpty = (value) => {
  return (
    value === "" || value === null || value === undefined || value.length === 0
  );
};
const emptyFuntion = (...para) => {};

export { isEmpty, emptyFuntion };

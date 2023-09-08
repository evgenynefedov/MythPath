const filterFields = (obj, allowedFields) => {
  return Object.keys(obj)
    .filter((key) => allowedFields.includes(key))
    .reduce((newObj, key) => {
      newObj[key] = obj[key];
      return newObj;
    }, {});
};

export default filterFields;

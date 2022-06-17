const data = [];

const addData = (newData) => {
  data.push(newData);
  return newData;
};

const getData = () => data;

module.exports = {
  addData,
  getData,
};

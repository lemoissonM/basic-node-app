const data = require('./data');

const saveAverageLocation = (req, res) => {
  const newData = req.body;
  const averageLocation = {
    lat: newData.lat,
    long: newData.lng,
    id: newData.id,
  };

  data.addData(averageLocation);
  res.status(201).json({ message: 'Location saved', data: averageLocation });
};

const getData = (req, res) => {
  res.status(200).json({ message: 'data', data: data.getData() });
};

module.exports = {
  saveAverageLocation,
  getData,
};

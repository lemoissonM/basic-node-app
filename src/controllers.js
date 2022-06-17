const data = require('./data');

const saveAverageLocation = (req, res) => {
  const newData = req.body;
  const averageLocation = {
    lat: newData.lat,
    long: newData.lng,
    id: newData.id,
  };

  data.addData(averageLocation);
  res.status(201).send({ message: 'Location saved', data: averageLocation });
};

module.exports = {
  saveAverageLocation,
};

const asyncHandler = require('express-async-handler');

// Get all vehicles
const getVehicles = asyncHandler(async (req, res) => {
  const vehicles = [
    {
      photo: 'http://localhost:3000/images/v/d1.jpg',
      vehicleName: 'Vehicle A',
      from: 'Colombo A Hospital',
      to: 'Kandy Royal pharmacy',
      products: [{ name: 'Allergy medications' }, { name: 'Nutrition' }, { name: 'Supplements' }],
      site: 'www.aacompany.com',
      currentLocation: 'Gampaha',
      phone: '071412421421',
      latitude: '7.074550',
      longitude: '80.022697',
    },
    {
      photo: 'http://localhost:3000/images/v/d2.jpg',
      vehicleName: 'Vehicle B',
      from: 'Colombo A Hospital',
      to: 'Matara Royal pharmacy',
      products: [{ name: 'Allergy medications' }],
      site: 'www.ccccompany.com',
      currentLocation: 'Kalutara',
      phone: '071111421421',
      latitude: '6.564100',
      longitude: '79.971169',
    },
  ];

  res.status(200).json(vehicles);
});

module.exports = {
  getVehicles,
};

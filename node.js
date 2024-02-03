const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
  params: {
    age: '25',
    gender: 'male',
    height: '180',
    weight: '70',
    activitylevel: 'level_1'
  },
  headers: {
    'X-RapidAPI-Key': 'f0a33aa4cbmsh4424abbf48f81ccp13de30jsn26b6983e8bb9',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

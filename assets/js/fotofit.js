// Assuming Axios is included via a <script> tag in your HTML
function calculateFitnessMetrics() {
  console.log("----- running JS 13`--- ");
  
  var age = 25;
  var gender = 'male';
  var weight = 89;
  var waist = 102.108;
  var height = 167;
  var activitylevel = 5;
  var hip = 92.0;
  var neck = 48.3;

  const bodyfatConfig = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
    params: {
      age: age.toString(),
      gender: gender.toString(),
      weight: weight.toString(),
      height: height.toString(),
      neck: neck.toString(),
      waist: waist.toString(),
      hip: hip.toString()
    },
    headers: {
      'X-RapidAPI-Key': 'f0a33aa4cbmsh4424abbf48f81ccp13de30jsn26b6983e8bb9',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };

  const macrosConfig = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
    params: {
      age: age.toString(),
      gender: gender.toString(),
      height: height.toString(),
      weight: weight.toString(),
      activitylevel: activitylevel.toString(),
      goal: 'extremelose',
    },
    headers: {
      'X-RapidAPI-Key': 'f0a33aa4cbmsh4424abbf48f81ccp13de30jsn26b6983e8bb9',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };
  console.log(macrosConfig);

  return axios.request(macrosConfig).then(response => {
    return axios.request(bodyfatConfig);
  }).then(response2 => {
    const bodyFatValue = parseFloat(response2.data.data['Body Fat (U.S. Navy Method)']);
    var activity, bmr;

    if (gender == 'male') {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 16;
    }

    var calDeficit, totalCal;

    if (activitylevel == 1) {
      activity = 1.15;
    } 
    if (activitylevel == 2) {
      activity = 1.35
    }
    if (activitylevel == 3) {
      activity = 1.55
    }
    if (activitylevel == 4) {
      activity = 1.75
    }
    if (activitylevel == 5) {
      activity = 1.75
    }
    if (activitylevel == 6) {
      activity = 1.95
    }
    if (activitylevel == 6) {
      activity = 2
    }
    
    var calDeficit = (bmr * activity) * 0.25;
    var totalCal = (3500 * (bodyFatValue - (weight * 0.1)));

    return Math.floor(totalCal / calDeficit);
  }).catch(error => {
    console.error(error);
    throw new Error('An error occurred. Please try again.');
  });
}

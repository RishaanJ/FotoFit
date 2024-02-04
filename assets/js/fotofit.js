// Assuming Axios is included via a <script> tag in your HTML
function calculateFitnessMetrics() {
  var age = document.getElementById('age').value;
  console.log(age);
  var weight = 70;
  var height = 178;
  var activitylevel = 5;

  const bodyfatConfig = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
    params: {
      age: age.toString(),
      gender: gender,
      weight: weight.toString(),
      height: height.toString(),
      neck: '50',
      waist: '96',
      hip: '92'
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
      gender: gender,
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
  axios.request(macrosConfig).then(response => {
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

    document.getElementById('days').textContent = Math.floor(totalCal/calDeficit);
  }).catch(error => {
    console.error(error);
    document.getElementById('results').innerHTML = 'An error occurred. Please try again.';
  });
}

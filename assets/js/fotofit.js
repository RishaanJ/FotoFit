// Assuming Axios is included via a <script> tag in your HTML
function calculateFitnessMetrics() {
  var age = 25;
  var gender = 'male';
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

  axios.request(macrosConfig).then(response => {
    return axios.request(bodyfatConfig);
  }).then(response2 => {
    const bodyFatValue = parseFloat(response2.data.data['Body Fat (U.S. Navy Method)']);
    var activity, bmr;
    // BMR calculation logic here

    var calDeficit, totalCal;
    // calDeficit and totalCal calculation logic here

    document.getElementById('results').innerHTML = `Caloric Deficit: ${calDeficit.toFixed(2)}<br>Total Calories Needed: ${totalCal.toFixed(2)}`;
  }).catch(error => {
    console.error(error);
    document.getElementById('results').innerHTML = 'An error occurred. Please try again.';
  });
}

import axios from 'axios';

// Get values from HTML form
const age = document.getElementById('age').value;
const gender = document.getElementById('gender').value;
const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;
const neck = document.getElementById('neck').value;
const waist = document.getElementById('waist').value;
const hip = document.getElementById('hip').value;
const activityLevel = document.getElementById('activity').value;
const intensityLevel = document.getElementById('intensity').value;
// Create request objects
const bodyfat = {
  method: 'GET',
  url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
  params: {
    age: age,
    gender: gender,
    weight: weight,
    height: height,
    neck: neck,
    waist: waist,
    hip: hip
  },
  headers: {
    'X-RapidAPI-Key': 'f0a33aa4cbmsh4424abbf48f81ccp13de30jsn26b6983e8bb9',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

const macros = {
  method: 'GET',
  url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
  params: {
    age: age,
    gender: gender,
    height: height,
    weight: weight,
    activitylevel: activityLevel,
    goal: intensityLevel,
  },
  headers: {
    'X-RapidAPI-Key': 'f0a33aa4cbmsh4424abbf48f81ccp13de30jsn26b6983e8bb9',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

// Make API requests

try {
  const response = await axios.request(macros);
  console.log(response.data);
  const response2 = await axios.request(bodyfat);
  console.log(response2.data);
} catch (error) {
  console.error(error);
}

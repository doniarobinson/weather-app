const axios = require('axios');
// I would normally not push my .env file, of course, but so that testers
// don't have to generate their own API KEY, I have

async function getWeatherByCity(city) {
  console.log(city);
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&APPID=${process.env.REACT_APP_APPID}`);
    return response.data.main.temp;
  }
  catch (error) {
    console.log(error);
    return error;
  }
}

export { getWeatherByCity };

//${city}
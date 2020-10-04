const axios = require('axios');
const cities = require('cities.json');

// I would normally not push my .env file, of course, but so that testers
// don't have to generate their own API KEY, I have

async function getWeatherByCity(name, country) {
  const found = cities.filter(city =>
    city.name.toLowerCase() === name.toLowerCase()
  );

  if (found[0]) {
    const lat = found[0].lat;
    const lon = found[0].lng;

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_APPID}`);
      return response.data;
    }
    catch (error) {
      //console.log(error);
      //return error;
      return "Error. Please try again.";
    }

  }
  else {
    return "Error. Please try again.";
  }

}

export { getWeatherByCity };
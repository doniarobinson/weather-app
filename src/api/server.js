const axios = require('axios');
const cities = require('cities.json');

async function getWeatherByCity(name, country) {
  // TODO: include country in search
  const found = cities.filter(city =>
    city.name.toLowerCase() === name.toLowerCase()
  );

  if (found[0]) {
    const lat = found[0].lat;
    const lon = found[0].lng;

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&APPID=${process.env.REACT_APP_APPID}`);
      return response.data;
    }
    catch (error) {
      // TODO: distinguish these error messages
      return "Error";
    }
  }
  else {
    // TODO: distinguish these error messages
    return "Error";
  }

}

export { getWeatherByCity };
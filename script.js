async function getWeather(city){
  const promise = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=X2HZ95NWL7NPLGGPNUA5T3XUD&contentType=json`);
  const data = await promise.json();
  const weather = data.currentConditions;
  console.log('temperature', weather.temp)
}

getWeather('london')
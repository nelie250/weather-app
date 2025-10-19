async function getWeather(city) {
  const key = "X2HZ95NWL7NPLGGPNUA5T3XUD&contentType=json";
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${key}`
    );
    if (!response.ok) {
      alert("Check the location you entered, please!");
      return;
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Fetch error:", error);
    alert("Check your internet connection!");
  }
}

const sendBtn = document.getElementById("sendBtn");
const myForm = document.getElementById("myForm");

myForm.onsubmit = (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value.trim();
  if (city) {
    ShowWeather(city);
  } else {
    alert("Please enter a city name.");
  }
};

async function ShowWeather(location) {
  const weather = await getWeather(location);
  if (weather) {
    const par = document.querySelectorAll("p");
    const currentConditions = weather.currentConditions;

    par.forEach((p) => {
      const key = p.id;
      if (currentConditions[key] !== undefined) {
        p.textContent = `${key}: ${currentConditions[key]}`;
      } else {
        p.textContent = `${key}: N/A`;
      }
    });
  }
}

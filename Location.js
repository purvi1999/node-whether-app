const request = require("request");
const FetchLocation = (location) => {
  const url =
    "https://api.weatherapi.com/v1/forecast.json?key=289a1d3a72f149409d551338221403&q=" +
    location +
    "&days=1&aqi=no&alerts=no";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable To Connect Server");
    } else if (response.body.error) {
      console.log("No Find Location");
    } else if (response.body.location === undefined) {
      console.log("Not Found Lov Flied");
    } else {
      console.log(response.body.location);
    }
  });
};
module.exports = FetchLocation;

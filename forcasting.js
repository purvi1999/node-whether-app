const request = require("request");
const ForCast = (location) => {
  const url =
    "https://api.weatherapi.com/v1/forecast.json?key=" +
    location +
    "&days=1&lang=fr&q=48.8567,2.3508";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Server not Connected....");
    } else if (response.body.error) {
      console.log("Cloud Flied Not Found");
    } else {
      console.log("........Cloud Information......");
      const n = response.body.forecast.forecastday[0].hour.length;
      for (let i = 0; i < n; i++) {
        console.log(
          "Cloud of Month :" +
            (i + 1) +
            " is " +
            response.body.forecast.forecastday[0].hour[i].cloud
        );
      }
    }
  });
};
module.exports = ForCast;

const request = require('request');

let getWeather = (results, callback) => {
    request({
        url: `https://api.darksky.net/forecast/0c9413d6a663923d5e63ba3aab761b0e/${results.latitude},${results.longitude}`,
        json: true,
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to server');
        } else if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: (body.currently.temperature - 32) * 5/9,
                apparentTemperature: (body.currently.apparentTemperature - 32) * 5/9
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports = {
    getWeather
};

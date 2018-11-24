const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`Address: ${results.address}`);
        weather.getWeather(results, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Temperature is ${results.temperature.toFixed(1)}° C. But it feels like ${results.apparentTemperature.toFixed(1)}° C.`);
            }
        })

    }
});


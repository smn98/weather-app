const request = require('request');

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress},+CA&key=AIzaSyCPKMjPEnMir0Azs2GTJpfiyIPbinbsz50`,
            json: true,
        },
            (error, response, body) => {
                if (error) {
                    reject('Unable to connect to remote servers!');
                } else if (body.status === "ZERO_RESULTS") {
                    reject('Unable to find the address');
                } else if (body.status === "OK") {
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });
                } else {
                    reject('Error!');
                }
            });
    }
    )
};

geocodeAddress(000).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
}).catch((error) => {
    console.log(error);
});
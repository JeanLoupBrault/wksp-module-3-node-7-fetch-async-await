// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    // add code here (include a try/catch as well)
    try {
        const response = await request("http://api.open-notify.org/iss-now.json");

        const issLocation = JSON.parse(response);
        const data = {
            lat: issLocation.iss_position.latitude,
            lng: issLocation.iss_position.longitude,
        };

        console.log(data);
        return data;
    }
    catch (err) {
        return console.log('error: ', err)
    }
}

getIssPosition();
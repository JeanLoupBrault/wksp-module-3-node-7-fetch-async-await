const request = require('request-promise');

const getGeekJoke = async () => {
    try {
        const joke = await request('https://geek-jokes.sameerkumar.website/api');

        const parsedJoke = JSON.parse(joke)
        return parsedJoke;
    } catch (err) { console.log('error: ', err) }
}
getGeekJoke().then(data => console.log(data));

module.exports = { getGeekJoke };


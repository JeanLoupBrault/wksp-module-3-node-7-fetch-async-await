const request = require('request-promise');

const getTronaldDump = async () => {
    try {
        const options = {
            uri: 'https://api.tronalddump.io/random/quote',
            headers: {
                'Accept': 'application/json'
            }
        }
        const quoteObj = await request(options);
        const parsedQuote = JSON.parse(quoteObj)
        return parsedQuote.value;
    } catch (err) { console.log('error: ', err) }
}
getTronaldDump().then(data => console.log(data));

module.exports = { getTronaldDump };
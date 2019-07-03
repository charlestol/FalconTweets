let twit = require("twit");
let randomWords = require('random-english-words');
const {
  ck, cs, at, ats
} = require('./secrets');

let Twitter = new twit({
    consumer_key: ck,
    consumer_secret: cs,
    access_token: at,
    access_token_secret: ats,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
})

let tweeter = () => Twitter.post('statuses/update', { status: 'Falcon ' + randomWords() }, function(err, data, response) {
    console.log(data.text)
});

// every 15sec for testing
// const interval = 15 * 1000

// every 6hrs
const interval = 6 * 60 * 60 * 1000

setInterval(tweeter, interval)

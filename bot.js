var twit = require("twit");
var randomWords = require('random-english-words');
const {
  ck, cs, at, ats
} = require('./secrets');

var Twitter = new twit({
    consumer_key: ck,
    consumer_secret: cs,
    access_token: at,
    access_token_secret: ats,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
})

Twitter.post('statuses/update', { status: 'Falcon ' + randomWords() }, function(err, data, response) {
    console.log(data)
  });

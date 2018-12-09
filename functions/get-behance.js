const https = require("https")

const behanceEndpoint = `https://www.behance.net/v2/users/jhackett1/projects?api_key=${process.env.BEHANCE_API_KEY}`

exports.handler = (event, context) => {
  https.get(behanceEndpoint, function(res) {
    res.setEncoding('utf8');
    var body = '';
    res.on('data', function(d) {
        body += d;
    });
    res.on('end', function() {
        try {
            var parsed = JSON.parse(body);
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
            return cb(err);
        }

        return {
          statusCode: 200,
          body: behancePosts
        }
    })
  }).on('error', function(err) {
      console.error('Error with the request:', err.message);
      return {
        statusCode: 500,
        body: err
      }
  })

}
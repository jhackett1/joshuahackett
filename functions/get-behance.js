const https = require("https")

const behanceEndpoint = `https://www.behance.net/v2/users/jhackett1/projects?api_key=${process.env.BEHANCE_API_KEY}`

exports.handler = async (event, context) => {
  https.get(behanceEndpoint, (res) => {
    res.on('end', () => {
      return {
        statusCode: 200,
        body: behancePosts
      }
    });
  })
}
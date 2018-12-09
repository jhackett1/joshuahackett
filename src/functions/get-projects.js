import fetch from "node-fetch";

const behanceEndpoint = `https://www.behance.net/v2/users/jhackett1/projects?api_key=${process.env.BEHANCE_API_KEY}`

exports.handler = async (event, context) => {
  return fetch(behanceEndpoint)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
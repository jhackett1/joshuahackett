import fetch from "node-fetch"

const behanceEndpoint = `https://www.behance.net/v2/users/jhackett1/projects?api_key=${process.env.BEHANCE_API_KEY}`

exports.handler = async (event, context) => {
  const behanceRes = await fetch(behanceEndpoint)
  const behancePosts = await behanceRes.json()
  return {
    statusCode: 200,
    body: behancePosts
  }
}
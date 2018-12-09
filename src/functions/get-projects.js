import fetch from "node-fetch"

exports.handler = async (event, context, callback) => {
    const behanceEndpoint = `https://www.behance.net/v2/users/jhackett1/projects?api_key=duRQQ11ImdOq0V5yHw2IMKrM12XL1QD2`
    const response = await fetch(behanceEndpoint)
    const data = await response.json()
    return  {
      statusCode: 200,
      body: JSON.stringify(data.projects)
    }
}
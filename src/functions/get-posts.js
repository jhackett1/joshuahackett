import fetch from "node-fetch"
import xml2js from 'xml2js-es6-promise'

exports.handler = async (event, context, callback) => {
    const mediumFeed = `https://medium.com/feed/@dinosaurlord`
    const response = await fetch(mediumFeed)
    const xml = await response.text()
    const data = await xml2js(xml)
    return  {
      statusCode: 200,
      body: JSON.stringify(data.rss.channel[0].item)
    }
}
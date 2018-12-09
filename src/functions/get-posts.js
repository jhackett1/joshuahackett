import fetch from 'isomorphic-unfetch'

const mediumFeed = `https://medium.com/feed/@dinosaurlord`

exports.handler = async (event, context) => {
    const mediumRes = await fetch(mediumFeed)
    const mediumXML = await mediumRes.text()
    let mediumPosts = await xml2js(mediumXML)
    mediumPosts = mediumPosts.rss.channel[0].item
    return {
        statusCode: 200,
        body: mediumPosts
    }
}
import fetch from "node-fetch"
import convert from 'xml-to-json-promise'

const mediumFeed = `https://medium.com/feed/@dinosaurlord`

exports.handler = async (event, context) => {

        const response = await fetch(mediumFeed)
        const text = await response.text()
        convert.xmlDataToJSON(text)
            .then(fuck => {
                return {
                    statusCode: 200,
                    body: fuck
                }
            })
            .catch(err => { 
                return{
                    statusCode: 400,
                    body: err
                }
            })


};



// const mediumXML = await mediumRes.text()
// let mediumPosts = await xml2js(mediumXML)
// mediumPosts = mediumPosts.rss.channel[0].item
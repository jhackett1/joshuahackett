import fetch from 'isomorphic-unfetch'
import xml2js from 'xml2js-es6-promise'
import { Element as ScrollElement } from 'react-scroll'

import Head from 'next/head'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import 'animate.css/animate.min.css'
import './main.sass'

export default class extends React.Component{
    static async getInitialProps(){
        // Get Behance posts via API
        const behanceEndpoint = `https://www.behance.net/v2/users/jhackett1/projects?api_key=${process.env.BEHANCE_API_KEY}`
        const behanceRes = await fetch(behanceEndpoint)
        const behancePosts = await behanceRes.json()
        // Get Medium posts via RSS
        const mediumFeed = `https://medium.com/feed/@dinosaurlord`
        const mediumRes = await fetch(mediumFeed)
        const mediumXML = await mediumRes.text()
        let mediumPosts = await xml2js(mediumXML)
        mediumPosts = mediumPosts.rss.channel[0].item
        // Return only the required number of posts
        return {
            behancePosts: behancePosts.projects.slice(0, 4),
            mediumPosts: mediumPosts.slice(0, 2)
        }
    }

    render(){
        return(
            <>
                <Head>
                    <title>Joshua Hackett</title>
                    <meta name="Description" content="An experience designer and developer based in London, experienced with public sector and charity clients."/>
                    <meta name="viewport" content="width=device-width"/>
                    <link rel="shortcut icon" href="/static/favicon.png" type="image/x-icon"/>
                    <link rel="icon" href="/static/favicon.png" type="image/x-icon"/>
                    <link href="https://fonts.googleapis.com/css?family=Exo:400,700" rel="stylesheet"/>
                </Head>
                <Hero/>
                <Profile/>
                <ScrollElement name="work">
                    <Work
                        behancePosts={this.props.behancePosts}
                        />
                </ScrollElement>
                <Skills/>
                <ScrollElement name="blog">
                    <Blog
                        mediumPosts={this.props.mediumPosts}
                        />
                </ScrollElement>

                <ScrollElement name="contact">
                    <Contact/>
                </ScrollElement>
                <Footer/>
            </>
        )
    }
}
import fetch from 'isomorphic-unfetch'
import xml2js from 'xml2js-es6-promise';

import Head from 'next/head'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

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
                    <meta name="viewport" content="width=device-width"/>
                    <link href="https://fonts.googleapis.com/css?family=Exo:400,700" rel="stylesheet"/>
                </Head>
                <Hero/>
                <Profile/>
                <Work
                    behancePosts={this.props.behancePosts}
                    />
                <Skills/>
                <Blog
                    mediumPosts={this.props.mediumPosts}
                    />
                <Contact/>
                <Footer/>
            </>
        )
    }
}
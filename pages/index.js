import { Element as ScrollElement } from 'react-scroll'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

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
        try{
            // Get Medium posts
            const mediumRes = await fetch(`https://joshuahackett.com/.netlify/functions/get-posts`)
            let mediumPosts = await mediumRes.json()
            // Get Behance posts
            const behanceRes = await fetch(`https://joshuahackett.com/.netlify/functions/get-projects`)
            let behancePosts = await behanceRes.json()
            // Return only the required number of posts
            return {
                behancePosts: behancePosts.slice(0, 4),
                mediumPosts: mediumPosts.slice(0, 2)
            }
        } catch(e){
            console.log(e)
            return {
                behancePosts: [],
                mediumPosts: []
            }
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
import { Element as ScrollElement } from 'react-scroll'
import Link from 'next/link'
import xml2js from 'xml2js-es6-promise'
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
            const postsRes = await fetch(`https://joshuahackett.com/.netlify/functions/get-posts`)
            let postsPosts = await postsRes.json()
            // Get Behance posts
            const projectsRes = await fetch(`https://joshuahackett.com/.netlify/functions/get-projects`)
            let projectsPosts = await projectsRes.json()
            // Return only the required number of posts
            return {
                behancePosts: projectsPosts.slice(0, 4),
                mediumPosts: postsPosts.slice(0, 2)
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

        console.log(this.props.behancePosts)



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
                <Link href="/derp"><a>Go to 2nd page</a></Link>
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
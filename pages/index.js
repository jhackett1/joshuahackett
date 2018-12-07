import fetch from 'isomorphic-unfetch'

import Head from 'next/head'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import Work from '../components/Work'
import Footer from '../components/Footer'

// import {getMediumPosts, getBehancePosts} from '../api'

import './main.sass'

export default class extends React.Component{

    static async getInitialProps(){
        const behanceEndpoint = `https://www.behance.net/v2/users/${process.env.BEHANCE_USERNAME}/projects?api_key=${process.env.BEHANCE_API_KEY}`
        const behanceRes = await fetch(behanceEndpoint)
        const behancePosts = await behanceRes.json()

        // const mediumEndpoint = `https://medium.com/${process.env.MEDIUM_USERNAME}/latest?format=json&limit=${2}`
        // const mediumRes = await fetch(endpoint)
        // const mediumPosts = await res.json()

        return {
            behancePosts: behancePosts.projects.slice(0, 4),
            mediumPosts: []
        }
    }


    render(){
        return(
            <>
                <Head>
                    <meta name="viewport" content="width=device-width"/>
                    <link href="https://fonts.googleapis.com/css?family=Exo:400,700" rel="stylesheet"/>
                </Head>
                <Hero/>
                <Profile/>
                <Work
                    behancePosts={this.props.behancePosts}
                    />
                {/* <Footer/> */}
            </>
        )
    }
}
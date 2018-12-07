import Head from 'next/head'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import './main.sass'

export default class extends React.Component{
    render(){
        return(
            <>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Exo:400,700" rel="stylesheet"/>
                </Head>
                <Hero/>
                <h1>HELLO</h1>
                <Footer/>
            </>
        )
    }
}
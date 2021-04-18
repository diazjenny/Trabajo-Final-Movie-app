import React from 'react'
import Layout from '../../Layout'
import Lists from './components/Lists'
import Slider from './components/Slider'
import './style.css'

const Home = () => {
    return (
        <div>
            <Layout>
                <Slider />
                <div className="lists-container">
                    <Lists path={"popular"} title={"Peliculas Populares"} />
                    <Lists path={"top_rated"} title={"Peliculas Mejor Puntadas"}/>
                </div>
                
            </Layout>            
        </div>
    )
}

export { Home };

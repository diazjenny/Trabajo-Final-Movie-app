import React, { useState, useEffect  } from 'react'  
import Carousel from 'react-bootstrap/Carousel'
import './style.css'
import {api} from '../../../../api/axios'


const Slider = () => {
  const [movies, setMovies] = useState([])
   useEffect(() => {
        const getPopular = async () => {
            const { data } = await api.get('/popular/');
            return setMovies(data.results)
        }
        getPopular();
    }, [])
  
  
  const urlBaseImg = "https://image.tmdb.org/t/p/"
  const widthImg = "w1280"
  
  return(                                 
    <Carousel fade>
       {movies.map(movie => {
                return (
                    <Carousel.Item className='ant-carousel' key={movie.id}>                        
                          <img
                            className="d-block w-100"
                            src={urlBaseImg + widthImg + movie.backdrop_path }
                            alt={movie.title}
                          />                     
                          <Carousel.Caption className="slider-movie-info">                          
                                <a href={"/ficha/" + movie.id}><h3>{movie.title}</h3></a>
                                <p>{movie.overview}</p>                          
                          </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
          </Carousel>         
  )          
}
export default Slider  

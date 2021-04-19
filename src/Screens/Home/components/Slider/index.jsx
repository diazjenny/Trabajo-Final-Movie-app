import React, { useState, useEffect  } from 'react'  
import Carousel from 'react-bootstrap/Carousel'
import './style.css'
import { api } from '../../../../api/axios'
import { Link } from 'react-router-dom'


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
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                                <Link to={`/movie/?id=${movie.id}`}>
                                    <button className="btn-primary">Ver mas ...</button>
                                </Link>
                          </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
          </Carousel>         
  )          
}
export default Slider  

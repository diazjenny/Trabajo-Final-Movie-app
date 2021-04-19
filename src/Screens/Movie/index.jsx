import React, { useState, useEffect } from 'react'
import { api } from '../../api/axios'
import Layout from '../../Layout'
import Video from './components/Video'
import './style.css'


const Movie = () => {
    const [movie, setMovie] = useState([])

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    
    useEffect(() => {
        api.get(id).then((response) => {
            setMovie(response.data)
        })
    }, [id])
    
    const urlBaseImg = "https://image.tmdb.org/t/p/"
    const widthImgBg = "w1280"
    const widthImgPt = "w400"

    return(
        <Layout>
            <div className="bgd-container">
                <img src={urlBaseImg + widthImgBg + movie.backdrop_path}
                     className="movie-background"
                     alt={`Wallpaper de ${movie.original_title}`}>
                </img>
                <div className="movie-detail-container">
                    <img src={urlBaseImg + widthImgPt + movie.poster_path}
                         alt={`Poster de ${movie.original_title}`}
                         className="movie-poster">
                    </img>
                    <div className="movie-description">
                        <div className="movie-details">
                            <div className="movie-title-details">
                                <h2>{movie.title}</h2>
                                <span>{movie.release_date}</span>
                            </div>
                        </div>
                        <div className="description">
                            <h6>General</h6>
                            <p>{movie.overview}</p>
                            {movie.genres &&
                                <>
                                    <h6>Generos</h6>
                                    <ul>
                                        {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                                    </ul>
                                </>
                            }
                            <div className="trailer-btn">
                               
                                    <Video />
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Movie

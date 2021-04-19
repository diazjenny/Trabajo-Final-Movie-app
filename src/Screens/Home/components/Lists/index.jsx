import React, { useState, useEffect } from 'react'
import { Link  } from 'react-router-dom'
import { api } from '../../../../api/axios'
import './style.css'    

const Lists = ({ path, title }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        api.get(path).then((response) => {
            setMovies(response.data.results)
        })
    }, [path])
    
    const urlBaseImg = "https://image.tmdb.org/t/p/"
    const widthImg = "w92"

    return (
        <div className="movies-container">
            <div>
                <h2 className="title">{title}</h2>
            </div>
            <div className="list"> 
                
                    {movies.map(movie => {
                        return (
                            <div className="movie-container" key={movie.id}>
                                <img src={urlBaseImg + widthImg + movie.poster_path}
                                    alt={movie.title}
                                    className="movie-img">
                                </img>
                                <h6 className="movie-title">{movie. title}</h6>
                                <Link  to={`/movie/?id=${movie.id}`} className="movie-detail">></Link >
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Lists

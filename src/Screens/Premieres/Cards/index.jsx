import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'   

const Cards = ({ source }) => {
    const urlBaseImg = "https://image.tmdb.org/t/p/"
    const widthImg = "w300"
    return (
       source.map(movie => {
            return(
                <Card key={movie.id} style={{ width: '14rem', display: 'inline-block', margin: '10px 10px'}}>
                    <Card.Img variant="top" src={urlBaseImg + widthImg + movie.poster_path} />
                    <Card.Body>
                        <Card.Title style={{fontSize: '14px', textAlign: 'center', marginBottom: "5px"}} className="card-title">{movie.title}</Card.Title>                      
                        <Card.Subtitle style={{ textAlign: 'center', marginTop: '15px' }}>
                            <Link to={`/movie/?id=${movie.id}`} className="link-cards">
                                <FontAwesomeIcon icon={faEye} />
                            </Link>
                        </Card.Subtitle>
                        
                    </Card.Body>
                </Card>
            )
        })
    )
}

export default Cards
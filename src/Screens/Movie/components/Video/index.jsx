import React, { useState, useEffect } from 'react'
import { api } from '../../../../api/axios'
import './style.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Video = () => {
    const [dataVideo, setDataVideo] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const [show, setShow] = useState(false);
    const urlBaseYtb = "https://www.youtube.com/embed/"
  
    useEffect(() => {
        api.get(`${id}/videos?`).then((response) => {
            setDataVideo(response.data.results[0])
        })
    }, [id]);
    console.log(dataVideo);
    return (
        <>
            <Button  variant="link" onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faPlayCircle} />  Ver Trailer
            </Button>
            <Modal show={show} onHide={() => setShow(false)}>                
                <div className="trailer">                       
                    {dataVideo && <iframe
                        width="100%"
                        height="100%"
                        src={urlBaseYtb + dataVideo.key}
                        title="Video player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>}
                </div>        
            </Modal>
        </>
    )
}

export default Video

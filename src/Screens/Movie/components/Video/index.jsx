import React, { useState, useEffect } from 'react'
import { api } from '../../../../api/axios'
import './style.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Video = () => {
    const [dataVideo, setDataVideo] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const [show, setShow] = useState(false);
  
    useEffect(() => {
        api.get(`${id}/videos?`).then((response) => {
            setDataVideo(response.data.results[0])
        })
    }, [id]);    
    return (
        <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Ver Trailer
      </Button>

    <Modal
        show={show}
        onHide={() => setShow(false)}
        
        contentClassName="modal-width"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
      >
        <Modal.Header closeButton>
            
        </Modal.Header>
        <Modal.Body>        
            <div>
                {dataVideo && <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${dataVideo.key}`}
                    title="Video player"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>}
            </div>
        </Modal.Body>
    </Modal>
    </>
    )
}

export default Video

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../../services/allApi';


function Videocard({video,setDeleteVideoResponse,insidecategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true)
    const{caption,link}=video
    let today= new Date()

     let timestamp= new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)

    let videoHistory = {caption,link,timestamp}

    await addVideoHistoryApi(videoHistory)
     

  }

  const removeVideo=async(id)=>{
    await deleteVideoApi(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted =(e,id)=>{
    console.log("dragstarted video id",id);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
      
      <Card style={{ width: '18rem'}} className='mt-2'  draggable onDragStart={e =>dragStarted(e,video.id)}>
      <Card.Img variant="top" style={{height:"300px"}} src={video.url} onClick={handleShow} />
      <Card.Body>
        <Card.Title style={{height:"50px"}} className='d-flex justify-content-between align-items-center'>
              
           
           <h5>{video.caption}</h5>
           {insidecategory?null:
            <button className='btn' onClick={()=>removeVideo(video?.id)}> <i className='fa-solid fa-trash text-danger'></i> </button>
}

        </Card.Title>
        
      </Card.Body>
    </Card>




    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
           
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default Videocard

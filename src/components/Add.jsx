import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoApi } from '../../services/allApi';



function Add({setUploadVideoResponse}) {



  const[uploadvideos,setUploadvideos]=useState({
    id:"",caption:"",url:"",link:""
  })

  console.log(uploadvideos);
  
   
   const getYoutubeLink =(e)=>{
  
      const {value}= e.target
      
      if(value.includes("v=")){
        let vID= value.split("v=")[1].slice(0,11)
        setUploadvideos({...uploadvideos,link:`https://www.youtube.com/embed/${vID}`})
      }else{
        setUploadvideos({...uploadvideos,link:""})
      }

   }

   const handleAdd = async()=>{
    const {id,caption,url,link}= uploadvideos
   
    if(!id ||!caption ||!url ||!link){
      alert("please fill the missing fields")
    }else{
      const result= await uploadVideoApi(uploadvideos)
      console.log(result);

     if(result.status>=200 && result.status<300){
      handleClose()
      alert("video uploaded succesfully")
      setUploadvideos({  id:"",caption:"",url:"",link:""})

      setUploadVideoResponse(result.data)
     }else{
      console.log(result.message);
      console.log(result.message);
      
      
     }
      
    }

   }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>


     <div className="d-flex align-items-center">
      <h5>Upload Videos</h5>
      <button onClick={handleShow} className='btn'><i className='fa-solid fa-arrow-up-from-bracket fa-beat mb-2'></i></button>

     </div>
    


    {/* modal */}


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>upload video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
        <FloatingLabel
        controlId="floatingInput"
        label="video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="id" onChange={(e)=>setUploadvideos({...uploadvideos,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTitle" label="video name">
        <Form.Control type="text" placeholder="name" onChange={(e)=>setUploadvideos({...uploadvideos,caption:e.target.value})} />
      </FloatingLabel>
            
        <FloatingLabel
        controlId="floatingInput"
        label="image url"
        className="mb-3 mt-3" 
      >
        <Form.Control type="text" placeholder="image url" onChange={(e)=>setUploadvideos({...uploadvideos,url:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="video url">
        <Form.Control type="text" placeholder="v url" onChange={getYoutubeLink}/>
      </FloatingLabel>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>



      
    </>
  )
}

export default Add

import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import Videocard from '../components/Videocard'
import Modal from 'react-bootstrap/Modal';
import { addVideoCategoryApi, deleteVideoCategoryApi, getAVideoApi, getVideoCategoryApi, updateCategoryAPI } from '../../services/allApi';
function Category({dropVideoResponse}) {
  const [show, setShow] = useState(false);
  const[allcategories,setAllcategories]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[categoryName,setCategoryName]=useState("")

  console.log(categoryName);

  const handleAdd=async()=>{
     
    if(categoryName){
      const result= await addVideoCategoryApi({categoryName,allVideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()

      }else{
        alert(result.message)
      }
    }else{
           alert("please fill the field")
    }
  }

  useEffect(()=>{
     getCategories()
  },[dropVideoResponse])

  const getCategories=async()=>{
    const {data} = await getVideoCategoryApi()
     setAllcategories(data)
  }

  // console.log(allcategories);
  
  const removeCategory=async(id)=>{
      await deleteVideoCategoryApi(id)
      getCategories()
  }

  const dragOver =(e)=>{
    // console.log("dragin over the category");
    e.preventDefault()
  }
  
  const videoDrop= async(e,categoryId)=>{
   
 const videoId= e.dataTransfer.getData("videoId")    
//  console.log( "videoId" + videoId +  " dropped inside",categoryId);
const {data} = await getAVideoApi(videoId)
// console.log(data);

const selectedCategory= allcategories.find(item => item.id===categoryId)
selectedCategory.allVideos.push(data)

await updateCategoryAPI(categoryId,selectedCategory)
   getCategories()
  }


  const videoDragStarted=(e,videoId,categoryId)=>{
    let dataShare={videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
}



  return (
    <>
      <div className="d-grid">
         <Button className='btn btn-info' onClick={handleShow}>Add Category</Button>
      </div>


      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={(e)=>setCategoryName(e.target.value)} type="text" className='form-control' placeholder='Enter Category Name' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>



    {
       allcategories?allcategories.map(category =>(
        <div className="border rounded mt-3 p-3" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category.id)}>
        <div className="d-flex justify-content-between align-items-center">
          <h4>{category.categoryName}</h4>
          <button onClick={()=>removeCategory(category.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
        </div>
   
   <Row>
       {
        category?.allVideos?category.allVideos.map(card =>(  
          <Col key={card.id}   draggable onDragStart={(e)=>videoDragStarted(e,card.id ,category.id)} >
          <Videocard video={card} insidecategory={true}/>
          </Col>
       )):null
         
       }
   </Row>

      </div>
       )):<h1 className='text-white'> Nothing to display</h1>
    }

    </>
  )
}

export default Category

import React, { useEffect, useState } from 'react'
import  { Col,Row}  from 'react-bootstrap'
import  Videocard from './Videocard'
import { getAllVideoApi, getVideoCategoryApi, updateCategoryAPI } from '../../services/allApi'
function View({uploadVideoResponse,setDropVideoResponse}) {

  const[allVideos,setAllVideos]=useState([])
  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)
useEffect(()=>{
  getAllVideos()
  setDeleteVideoResponse(false)
},[uploadVideoResponse,deleteVideoResponse])

const getAllVideos =async()=>{
  const result= await getAllVideoApi()
  //console.log(result);

  if(result.status==200){
   setAllVideos(result.data)
  }else{
    setAllVideos([])
    console.log("API FAILED");
    
  }
  
}



const dragOver=(e)=>{
  e.preventDefault()
}


const videoDropped = async (e) => {
  try {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData("data"));
    const { data } = await getVideoCategoryApi();
    const selectedCategory = data.find(item => item.id === categoryId);

    // Filter out the video from the category's allVideos
    const updatedVideos = selectedCategory.allVideos.filter(video => video.id !== videoId);

    // Create a new category object with the updated videos
    const updatedCategory = { 
      ...selectedCategory, 
      allVideos: updatedVideos 
    };

    // Update the category in the API
    const res=  await updateCategoryAPI(categoryId, updatedCategory);
    setDropVideoResponse(res)

  } catch (error) {
    console.error("Error during video drop:", error);
  }
};





  return (
    <>



    <Row  droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
      {
        allVideos?.length>0?allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3} className='ms-3'>
          <Videocard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
          </Col>
        )):null
        
        }
    </Row>
      
    </>
  )
}

export default View

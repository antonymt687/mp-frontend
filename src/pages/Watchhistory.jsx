import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi, getVideoHistoryApi } from '../../services/allApi'

function Watchhistory() {
 const[history,setHistory]=useState([])
  const[historyresponse,setHistoryResponse]=useState(false)
   const getHistory=async()=>{
     const result= await getVideoHistoryApi()
     if(result.status==200){
      setHistory(result.data)
     }else{
      console.log("api failed");
      console.log(result.message);
      
     }
   }
  
   console.log(history);
   

   useEffect(()=>{
   getHistory()
  
   setHistoryResponse(false)
   },[historyresponse])


   const dltHistory=async(id)=>{
     await deleteVideoHistoryApi(id)
    setHistoryResponse(true)
    
   }

   


  return (
    <div style={{minHeight:"500px"}}>
  
  <div  className="container mt-5 mb-5 d-flex justify-content-between">


<div className="add-videos">
   <h5  style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}}>Watch-history</h5>
</div>

<Link to={'/home'} style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}}> Back to home <i className='fa-solid fa-arrow-rotate-left fa-beat-fade'></i> </Link>
    
</div>


  
     <table className='table mb-5 container shadow w-100'>
         <thead className='text-warning'>
          <tr>
          <th>#</th>
           <th>caption</th>
           <th>URL</th>
           <th>Timestamp</th>
           <th>Action</th>
          </tr>
         </thead>
        <tbody>
        { 
          history?.length>0?history.map((his,index) =>(
            <tr>
             <td>{index+1}</td>
             <td>{his.caption}</td>
             <td><a href={his.link} target='_blank'>{his.link}</a></td>
             <td>{his.timestamp}</td>
             <td><button className='btn' onClick={()=>dltHistory(his?.id)}><i className='fa-solid fa-trash text-danger'></i></button></td>

          </tr>
          )): <p className='text-danger fw-bolder'>nothing to display</p>
        }
           
        </tbody>

     </table>


         
    
    </div>
  )
}

export default Watchhistory

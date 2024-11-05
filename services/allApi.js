import { commonAPI } from "./commonApi";
import { server_url } from "./server_url";

//upload videos Api


export const uploadVideoApi= async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

// get all uploadedvideos api
export const getAllVideoApi= async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

//get a video api

export const getAVideoApi= async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}

// delete video api

export const deleteVideoApi= async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}

//add video history

export const addVideoHistoryApi= async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

//get video history 

export const getVideoHistoryApi= async()=>{
    return await commonAPI("GET",`${server_url}/history/`,"")
}

//delete video history

export const deleteVideoHistoryApi= async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

//add category api
export const addVideoCategoryApi= async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}

//get category api

export const getVideoCategoryApi= async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

//delete category api
export const deleteVideoCategoryApi= async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

//update category


export const updateCategoryAPI= async(id,categoryDetails)=>{
  return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}
import React from 'react'
import Loader from './Loader'

export default function videoDetail({video}) {
    if(!video){
        return <div style={{display:"flow",alignItems:"center"}}>Loading....</div> 
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
        <div className='ui embed'>
            <iframe title='Video Player'  src={videoSrc}/>
        </div>
    <div className='ui segment'>
      <h4 className='ui header'>{video.snippet.title}</h4>  
      <p className='ui description'>{video.snippet.description}</p>
    </div>
    </div>
  )
}

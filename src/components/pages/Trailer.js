import React from 'react'
import ReactPlayer from 'react-player'
import '../../App.css';

export default function Trailer() {
  return (
    <div className="trailer">
      <ReactPlayer
      style={{marginTop: '80px'}}
    width='100vw'
    height='calc(100vh - 84px)'
    
        url="https://www.youtube.com/watch?v=RcmrbNRK-jY" controls="true"
      />
    </div>
  )
}


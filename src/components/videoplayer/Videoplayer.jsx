import React, { useRef } from 'react';
import './Videoplayer.css';

const Videoplayer = ({playstate,setplaystate}) => {
    const player=useRef(null)
    const closeplayer=(e)=>{
        if(e.target===player.current){
            setplaystate(false)
        }
    }
  return (
    <div className={`video-player ${playstate?'':'hide'}`} ref={player} onClick={closeplayer}>
      <video src='https://youtu.be/8IpPauTHRh0' autoplay muted controls></video>
    </div>
  )
}

export default Videoplayer
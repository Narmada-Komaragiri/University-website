import React, { useRef } from 'react';
import './Videoplayer.css';

const Videoplayer = ({ playstate, setplaystate }) => {
  const player = useRef(null);

  const closeplayer = (e) => {
    if (e.target === player.current) {
      setplaystate(false); // Closes the player if clicked outside the video
    }
  };

  return (
    <div className={`video-player ${playstate ? '' : 'hide'}`} ref={player} onClick={closeplayer}>
      {/* Embed YouTube video using iframe */}
      <iframe
        width="90%"
        height="auto"
        src="https://www.youtube.com/embed/8IpPauTHRh0?autoplay=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video"
      ></iframe>
    </div>
  );
};

export default Videoplayer;

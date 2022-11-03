import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const pauseIcon = require('./img/pause-icon.svg');
const playIcon = require('./img/play-icon.svg');

const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);
  const audioPlayerRef = useRef();

  useEffect(() => {
    if (playing) {
      audioPlayerRef.current.play();
    } else {
      audioPlayerRef.current.pause();
    }
  }, [playing]);

  const handlePlay = () => {
    setPlaying(!playing);
  };

  const handleTimeUpdate = (e) => {
    onTimeUpdate(e.target.currentTime);
  };

  return (
    <>
      <div className="player-controls">
        <audio
          onTimeUpdate={handleTimeUpdate}
          ref={audioPlayerRef}
          src={src}
        ></audio>
        <button
          className={`play-button ${playing ? 'pause' : 'play'}`}
          onClick={handlePlay}
        ></button>
      </div>
    </>
  );
};

export default Player;

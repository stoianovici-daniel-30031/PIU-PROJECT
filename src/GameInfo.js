// GameInfo.js
import React from 'react';
import gameinfo from './images/gameinfo.png'
const GameInfo = () => {
  return (
    <div className="game-info">
      
      
        <div className="info-text">
          <h1>Game Info</h1>
          <p>Embark on epic adventures in World of Warcraft, 
            a vibrant realm filled with wonders, dangers, 
            and limitless possibilities. Choose your path, 
            master powerful abilities, and face formidable challenges alongside allies. 
            Explore breathtaking landscapes, battle fearsome creatures, 
            and leave your mark on a world where heroes are forged.</p>
        </div>
        <img src={gameinfo} alt="Game Info" className="background-image" />
      
    </div>
  );
};

export default GameInfo;
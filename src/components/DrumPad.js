import React from 'react'

const DrumPad = ({ id, audioClip, soundEffect, currentPad, setCurrentPad, handleKeyDown }) => {
//   let audioFile = new Audio(soundEffect);
//   let lowerCaseId = id.toLowerCase();

  let handleClick = (e) => {
      e.preventDefault();
      setCurrentPad([id, audioClip]);
      // soundEffect.currentTime = 0;
      soundEffect.play() 
  }


//   let handleKeyDown = (e) => {
//     // if (e.target.key === lowerCaseId) {
//     //     setCurrentPad([id, audioClip]);
//     //     audioFile.play()
//     // }
//     setCurrentPad([id, audioClip]);
//     soundEffect.play();
//     console.log(e.key);


//     }
  return (
    
    <button onClick={handleClick} className="drum-button">
            <p>{id}</p>
            <audio
                className='clip'
                src={soundEffect}
                type="audio/mpeg">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>


    </button>
    
  )
}

export default DrumPad
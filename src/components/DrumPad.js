import React from 'react'

const DrumPad = ({ id, audioClip, soundEffect, currentPad, setCurrentPad }) => {
//   let audioFile = new Audio(soundEffect);
let lowerCaseId = id.toLowerCase();

  let handleClick = (e) => {
      setCurrentPad([id, audioClip]);
      soundEffect.play()
      console.log(e.target);

  }
//   let handleKeyDown = (e) => {
//     // if (e.target.key === lowerCaseId) {
//     //     setCurrentPad([id, audioClip]);
//     //     audioFile.play()Q
//     // }
//     setCurrentPad([id, audioClip]);
//     soundEffect.play();
//     console.log(e.key);

//     }
  return (
    
    <button tabIndex={0} onClick={handleClick} className="drum-button">
            <audio
                className='clip'
                onClick={() => soundEffect.play}
                src={soundEffect}
                type="audio/mpeg">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
            <p>{id}</p>


    </button>
    
  )
}

export default DrumPad
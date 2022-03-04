import React from 'react'

const DrumPad = ({ id, audioClip, soundEffect, currentPad, setCurrentPad, handleKeyDown }) => {
//   let audioFile = new Audio(soundEffect);
//   let lowerCaseId = id.toLowerCase();

  let handleClick = (e) => {
      e.preventDefault();
      setCurrentPad([id, audioClip]);
      soundEffect.play()
      console.log(e.target);
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
    
    <button onClick={handleClick} onKeyDown={handleKeyDown} className="drum-button">
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
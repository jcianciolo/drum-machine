import React from 'react'

const DrumPad = ({ id, audioClip, soundEffect, currentPad, setCurrentPad }) => {
  let audioFile = new Audio(soundEffect);
  let handleClick = (e) => {
      setCurrentPad([id, audioClip]);
      audioFile.play()
  }
  return (
    
    <button onClick={handleClick} >
            <audio
                className='clip'
                onClick={() => audioFile.play}
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
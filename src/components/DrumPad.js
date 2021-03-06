import React from 'react'

const DrumPad = ({ id, audioClip, soundEffect, currentPad, setCurrentPad }) => {
  // let audioFile = new Audio(soundEffect);
//   let lowerCaseId = id.toLowerCase();

  let handleClick = (e) => {
      soundEffect.play();
      console.log(e.type)
      setCurrentPad(id);
  }


  // let handleKeyDown = (e) => {
  //   // if (e.target.key === lowerCaseId) {
  //   //     setCurrentPad([id, audioClip]);
  //   //     audioFile.play()
  //   // }
  //   // setCurrentPad([id, audioClip]);
  //   handleClick(e.target);
  //   // console.log(e.key);
  // }

//     }
  return (
    
    <button className="drum-button" onClick={handleClick}>
            <p>{id}</p>
            <audio
                className='clip'
                src={audioClip}
                type="audio/wav">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>


    </button>
    
  )
}

export default DrumPad
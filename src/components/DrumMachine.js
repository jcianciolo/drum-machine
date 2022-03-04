import React from 'react'
import DrumPad from './DrumPad'
import { useState } from 'react'
import hat1 from '../audio/CYCdh_Sab_OpHat-01.mp3'
import hat4 from '../audio/CYCdh_Sab_HfHat-04.wav'


const DrumMachine = () => {
const [currentPad, setCurrentPad] = useState([]);
const hatOneSound = new Audio(hat1);
const hatFourSound = new Audio(hat4);



const keybindings = [
    ['q', '../audio/CYCdh_Sab_OpHat-01.wav', hatOneSound],
    ['w', '../audio/CYCdh_Sab_OpHat-01.mp3', hatFourSound],
    ['e', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['a', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['s', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['d', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['z', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['x', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['c', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound]
]

const soundArray = [];

for (let item of keybindings) {
    soundArray.push(item[0]);
}

// const keyPressHelper = (sound) => {
//     sound.currentTime = 0;
//     sound.play();
// }


let handleKeyDown = (e) => {
    e.preventDefault();
    if (soundArray.includes(e.key)) {
        console.log(e.key);
    }
    if (e.key === 'q') {
        hatOneSound.currentTime = 0;
        hatOneSound.play();
    }
    if (e.key === 'w') {
        hatFourSound.currentTime = 0;
        hatFourSound.play();
    }
    if (e.key === 'e') {
        hatOneSound.play();
    }
    if (e.key === 'a') {
        hatOneSound.play();
    }
    if (e.key === 's') {
        hatOneSound.play();
    }
    if (e.key === 'd') {
        hatOneSound.play();
    }
    if (e.key === 'z') {
        hatOneSound.play();
    }
    if (e.key === 'x') {
        hatOneSound.play();
    }
    if (e.key === 'c') {
        hatOneSound.play();
    }
    console.log(soundArray);
}

const drumPads = keybindings.map((drum) => 

    <DrumPad 
        className="drum-pad" 
        id={drum[0]} 
        key={drum[0]} 
        audioClip={drum[1]}
        soundEffect={drum[2]}
        currentPad={currentPad}
        setCurrentPad={setCurrentPad}
        handleKeyDown={handleKeyDown}
    />
);


  return (
    <div id="drum-machine" onKeyDown={handleKeyDown} tabIndex={0}>
        <div id="container">
            <div id="display">
                <h2>Drums</h2>
                <div id="interactive-content">
                    <div id="pads">
                        {drumPads}
                    </div>
                    <div id="options">
                        <h2>options</h2>
                        <h3>{currentPad[0]}</h3>
                        <p>{currentPad[1]}</p>
                        <h3>{hat1}</h3>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DrumMachine
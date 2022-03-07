import React from 'react'
import DrumPad from './DrumPad'
import { useState } from 'react'
import hat1 from '../audio/CYCdh_Sab_OpHat-03.wav'
import hat4 from '../audio/CYCdh_Sab_HfHat-04.wav'
import hat6 from '../audio/CYCdh_Sab_ClHat-06.wav'


const DrumMachine = () => {
const [currentPad, setCurrentPad] = useState([]);
const hatOneSound = new Audio(hat1);
const hatFourSound = new Audio(hat4);
const hatSixSound = new Audio(hat6);



const keybindings = [
    ['q', '../audio/CYCdh_Sab_OpHat-03.wav', hatOneSound],
    ['w', '../audio/CYCdh_Sab_HfHat-04.wav', hatFourSound],
    ['e', '../audio/CYCdh_Sab_ClHat-06.wav', hatSixSound],
    ['a', '../audio/CYCdh_Sab_OpHat-03.wav', hatOneSound],
    ['s', '../audio/CYCdh_Sab_OpHat-03.wav', hatOneSound],
    ['d', '../audio/CYCdh_Sab_OpHat-03.wav', hatOneSound],
    ['z', '../audio/CYCdh_Sab_OpHat-03.wav', hatOneSound],
    ['x', '../audio/CYCdh_Sab_OpHat-03.wav', hatOneSound],
    ['c', '../audio/CYCdh_Sab_OpHat-03.wav', hatOneSound]
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
        hatSixSound.currentTime = 0;
        hatSixSound.play();
    }
    if (e.key === 'a') {
        hatOneSound.currentTime = 0;
        hatOneSound.play();
    }
    if (e.key === 's') {
        hatOneSound.currentTime = 0;
        hatOneSound.play();
    }
    if (e.key === 'd') {
        hatOneSound.currentTime = 0;
        hatOneSound.play();
    }
    if (e.key === 'z') {
        hatOneSound.currentTime = 0;
        hatOneSound.play();
    }
    if (e.key === 'x') {
        hatOneSound.currentTime = 0;
        hatOneSound.play();
    }
    if (e.key === 'c') {
        hatOneSound.currentTime = 0;
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
                        <h2>Options</h2>
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
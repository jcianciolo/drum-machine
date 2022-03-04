import React from 'react'
import DrumPad from './DrumPad'
import { useState } from 'react'
import hat1 from '../audio/CYCdh_Sab_OpHat-01.mp3'


const DrumMachine = () => {
const [currentPad, setCurrentPad] = useState([]);


const hatOneSound = new Audio(hat1);
const soundArray = [hatOneSound];

const keybindings = [
    ['q', '../audio/CYCdh_Sab_OpHat-01.wav', hatOneSound],
    ['w', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['e', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['a', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['s', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['d', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['z', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['x', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound],
    ['c', '../audio/CYCdh_Sab_OpHat-01.mp3', hatOneSound]
]

let handleKeyDown = (e) => {
    if (soundArray.includes(e.key)) {
        console.log(e.key);
    }
    console.log('hello');

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
    <div id="drum-machine" onKeyDown={handleKeyDown}>
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
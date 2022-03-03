import React from 'react'
import DrumPad from './DrumPad'
import { useState } from 'react'
import hat1 from '../audio/CYCdh_Sab_OpHat-01.mp3'


const DrumMachine = () => {
const [currentPad, setCurrentPad] = useState([]);
const keybindings = [
    ['Q', '../audio/CYCdh_Sab_OpHat-01.mp3', hat1],
    ['W', '../audio/CYCdh_Sab_OpHat-01.mp3', hat1],
    ['E', '../audio/CYCdh_Sab_OpHat-01.mp3', hat1],
    ['A', '../audio/CYCdh_Sab_OpHat-01.mp3', hat1],
    ['S', '../audio/CYCdh_Sab_OpHat-01.mp3', hat1],
    ['D', '../audio/CYCdh_Sab_OpHat-01.mp3', hat1],
    ['Z', '../audio/CYCdh_Sab_OpHat-01.mp3', hat1],
    ['X', '../audio/CYCdh_Sab_OpHat-01.mp3', hat1],
    ['C', '../audio/CYCdh_Sab_OpHat-01.mp3', hat1]
]


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
    <div id="drum-machine">
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
  )
}

export default DrumMachine
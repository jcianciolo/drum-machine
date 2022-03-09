import React from 'react'
import DrumPad from './DrumPad'
import { useState, useEffect } from 'react'
import hat1 from '../audio/CYCdh_Sab_OpHat-03.wav'
import hat4 from '../audio/CYCdh_Sab_HfHat-04.wav'
import hat6 from '../audio/CYCdh_Sab_ClHat-06.wav'
import snareOff6 from '../audio/CYCdh_LudSnrOffB-06.wav'
import snare5 from '../audio/CYCdh_LudSnrB-05.wav'
import rim6 from '../audio/CYCdh_LudRimB-06.wav'
import looseKick8 from '../audio/CYCdh_LooseKick-08.wav'
import kesKick7 from '../audio/CYCdh_KesKick-07.wav'
import acouKick18 from '../audio/CYCdh_AcouKick-18.wav'


const DrumMachine = () => {
const [currentPad, setCurrentPad] = useState('');

const hatOneSound = new Audio(hat1);
const hatFourSound = new Audio(hat4);
const hatSixSound = new Audio(hat6);
const snareOffSixSound = new Audio(snareOff6);
const snareFiveSound = new Audio(snare5);
const rimSixSound = new Audio(rim6);
const looseKickEightSound = new Audio(looseKick8);
const kesKickSevenSound = new Audio(kesKick7);
const acouKickEighteenSound = new Audio(acouKick18);



const keybindings = [
    ['q', '../audio/CYCdh_Sab_OpHat-03.wav', hatOneSound],
    ['w', '../audio/CYCdh_Sab_HfHat-04.wav', hatFourSound],
    ['e', '../audio/CYCdh_Sab_ClHat-06.wav', hatSixSound],
    ['a', '../audio/CYCdh_LudSnrOffB-06.wav', snareOffSixSound],
    ['s', '../audio/CYCdh_LudSnrB-05.wav', snareFiveSound],
    ['d', '../audio/CYCdh_LudRimB-06.wav', rimSixSound],
    ['z', '../audio/CYCdh_LooseKick-08.wav', looseKickEightSound],
    ['x', '../audio/CYCdh_KesKick-07.wav', kesKickSevenSound],
    ['c', '../audio/CYCdh_AcouKick-18.wav', acouKickEighteenSound]
]

const soundArray = [];

for (let item of keybindings) {
    soundArray.push(item[0]);
}

// const keyPressHelper = (sound) => {
//     sound.currentTime = 0;
//     sound.play();
// }
let handleClickAndKeyDown = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === 'q' || e.key === 'q') {
        hatOneSound.currentTime = 0;
        hatOneSound.play();
    }
    if (e.target.innerHTML === 'w' || e.key === 'w') {
        hatFourSound.currentTime = 0;
        hatFourSound.play();
    }
    if (e.target.innerHTML === 'e' || e.key === 'e') {

        hatSixSound.currentTime = 0;
        hatSixSound.play();
    }
    if (e.target.innerHTML === 'a' || e.key === 'a') {

        snareOffSixSound.currentTime = 0;
        snareOffSixSound.play();
    }
    if (e.target.innerHTML=== 's' || e.key === 's') {

        snareFiveSound.currentTime = 0;
        snareFiveSound.play();
    }
    if (e.target.innerHTML === 'd' || e.key === 'd') {

        rimSixSound.currentTime = 0;
        rimSixSound.play();
    }
    if (e.target.innerHTML === 'z' || e.key === 'z') {

        looseKickEightSound.currentTime = 0;
        looseKickEightSound.play();
    }
    if (e.target.innerHTML === 'x' || e.key === 'x') {

        kesKickSevenSound.currentTime = 0;
        kesKickSevenSound.play();
    }
    if (e.target.innerHTML === 'c' || e.key === 'c') {

        acouKickEighteenSound.currentTime = 0;
        acouKickEighteenSound.play();
    }
    // setCurrentPad(e.target.innerHTML)
    console.log(e.key)
}


// let handleKeyDown = (e) => {
//     // e.preventDefault();
//     // if (soundArray.includes(e.key)) {
//     //     console.log(e.key);
//     // }
//     if (e.key === 'q') {
//         hatOneSound.currentTime = 0;
//         hatOneSound.play();
//     }
//     if (e.key === 'w') {
//         hatFourSound.currentTime = 0;
//         hatFourSound.play();
//     }
//     if (e.key === 'e') {
//         hatSixSound.currentTime = 0;
//         hatSixSound.play();
//     }
//     if (e.key === 'a') {
//         snareOffSixSound.currentTime = 0;
//         snareOffSixSound.play();
//     }
//     if (e.key === 's') {
//         snareFiveSound.currentTime = 0;
//         snareFiveSound.play();
//     }
//     if (e.key === 'd') {
//         rimSixSound.currentTime = 0;
//         rimSixSound.play();
//     }
//     if (e.key === 'z') {
//         looseKickEightSound.currentTime = 0;
//         looseKickEightSound.play();
//     }
//     if (e.key === 'x') {
//         kesKickSevenSound.currentTime = 0;
//         kesKickSevenSound.play();
//     }
//     if (e.key === 'c') {
//         acouKickEighteenSound.currentTime = 0;
//         acouKickEighteenSound.play();
//     }
//     console.log(e.key)
// }

const drumPads = keybindings.map((drum) => 

    <DrumPad 
        className="drum-pad" 
        id={drum[0]} 
        key={drum[0]} 
        audioClip={drum[1]}
        // soundEffect={drum[2]}
        // currentPad={currentPad}
        // setCurrentPad={setCurrentPad}
        
    />
);


  return (
    <div id="drum-machine" onClick={handleClickAndKeyDown} onKeyDown={handleClickAndKeyDown} tabIndex={0}>
        <div id="container">
            <div id="display">
            <h2 id="display-title">Drums</h2>
                <div id="interactive-content">
                    <div id="pads">
                        {drumPads}
                    </div>
                    <div id="options">
                        <h2>Options</h2>
                        <h3>{currentPad}</h3>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DrumMachine
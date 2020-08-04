import React from 'react'

function logger() {
    console.log('Entering password...')
}

function Keypad() {
    return <input onKeyUp={logger} type="password" />
}


export default Keypad

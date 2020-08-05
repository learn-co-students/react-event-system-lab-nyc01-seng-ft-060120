// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    return <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>Button</button>
}

export default EyesOnMe
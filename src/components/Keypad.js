import React, { Component } from 'react'

class Keypad extends Component{
    pressedKey = (event) =>{
        'Entering Password.....'
        console.log(this.pressedKey)
    }

    render(){
        return(
            <input type="password" onKeyUp = {this.pressedKey}/>
        )
    }
}

export default Keypad
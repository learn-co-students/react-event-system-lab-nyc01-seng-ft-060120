import React from 'react'

class Keypad extends React.Component{

    keyUpHandler = () =>{
        return console.log('Entering password...')
    }


    render(){
        return(
            <div>
                <h1>Keypad</h1>
                <input onKeyUp={this.keyUpHandler} type="password"></input>
            </div>
        )
    }
}

export default Keypad

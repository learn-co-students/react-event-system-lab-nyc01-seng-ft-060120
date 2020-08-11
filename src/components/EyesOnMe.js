import React, { Component } from 'react'

class EyesOnMe extends Component {
    OnFocus =() =>{
        console.log('Great!')
    }
    OnBlur = () => {
        console.log('FOCUS MY DUDE')
    }
    render(){
        return(
            <button onFocus ={this.OnFocus} onBlur ={this.OnBlur}>As Tupac once said all EYEZ ON ME</button>
        )
    }
}


export default EyesOnMe
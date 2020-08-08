import React from 'react'


class EyesOnMe extends React.Component{

    focusHandler = () => {
        return console.log('Good!')
    }

    blurHandler = () => {
        return console.log('Hey! Eyes on me!')
    }

render(){
    return(
        <div>
            <h1>Eyes on Me</h1>
            <button onFocus={this.focusHandler} onBlur={this.blurHandler}>CLICK</button>
        </div>
    )
}
}

export default EyesOnMe

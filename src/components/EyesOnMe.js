import React from 'react'

function good() {
    console.log('Good!')
}

function hey() {
    console.log("Hey! Eyes on me!");
}


function EyesOnMe() {
    return <button onFocus={good} onBlur={hey} />
}


export default EyesOnMe
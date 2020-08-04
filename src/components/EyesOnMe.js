import React from 'react';

class EyesOnMe extends React.Component {
    
    focus(){
        console.log("Good!")
    }

    blur(){
        console.log('Hey! Eyes on me!')
    }
    
    render(){

        return(
            <button 
            onFocus = {this.focus}
            onBlur = {this.blur}>Eyes on me, please!</button>
        )


    }
}

export default EyesOnMe;
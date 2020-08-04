import React from 'react';

class Keypad extends React.Component {

   clickHandler = () => {     
       console.log("Entering password...") 
   }
   
   render(){
    return (
        <input onKeyUp={this.clickHandler} type="password" />
    )  
   }
}

export default Keypad

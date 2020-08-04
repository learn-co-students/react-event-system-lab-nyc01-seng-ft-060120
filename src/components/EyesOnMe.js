import React from 'react';

class EyesOnMe extends React.Component {

   state = {}
   
   names = () => {
   }

   clickHandler = () => {     
       console.log("Good!") 
   }
   
   blur = () => {     
    console.log("Hey! Eyes on me!") 
}

   render(){
    return (
        <button onFocus={this.clickHandler} onBlur={this.blur}>Hello!</button>
    )  
   }
}

export default EyesOnMe

import React from 'react';

export default class EyesOnMe extends React.Component {
    focusFn = () => console.log('Good!')
    blurFn = () => console.log('Hey! Eyes on me!')
    render() {
        return <button onFocus={this.focusFn} onBlur={this.blurFn} >👀</button>
    }
}
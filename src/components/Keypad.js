import React from 'react';

export default class Keypad extends React.Component {
    printFn = () => console.log('Entering password...')
    render() {
        return <input onKeyUp={this.printFn} type="password" />
    }
}
import React, { Component } from 'react';

class Counter2 extends Component {
    state = {
        count: 0
    };
    render() { 
        return (
            <React.Fragment>
                        <span>{this.formatCount()}</span>
                        <button>Increment</button>
            </React.Fragment>
        );
    }

    formatCount(){
        const {count} = this.state; //this is called de structuring the command 
        // return this.state.count === 0 ? 'ZERO' : this.state.count;
        // return count === 0 ? 'ZERO' : count; //instead of plain text 
        return count === 0 ? <h1>ZERO</h1> : <h2>{count}</h2>; 
    }
}
export default Counter;
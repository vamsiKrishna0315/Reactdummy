import React, { Component } from 'react';

class Counter extends Component {
    
    state = {
        count: 0,
    };

    // constructor(){
    //     super();
    //     // console.log("constructor", this); comment
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () =>{
        console.log('button clicked', this);
        // this.state.count++;  //old method which wont work in react beacuse react doesnt knew what to change 
        this.setState({count: this.state.count + 1});

    }
    handleDecrement = () => {
        // console.log('Hii')
        this.setState({count: this.state.count - 1});
    }

    resetCounter = () => {
        this.setState({count: this.state.count * 0});
    }
    render() { 
        return (
            <div>
                        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm m-2'> + </button>
                        <button onClick={this.handleDecrement} className= 'btn btn-danger btn-sm m-2'> - </button>
                        <button onClick={this.resetCounter} className = 'btn btn-warning btn-sm'>RESET</button>
                    
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
       
        return count === 0 ? <h1>0</h1> : <h1>{count}</h1>; 
    }
}
export default Counter;

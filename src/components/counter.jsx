import React, { Component } from 'react';

class Counter extends Component {
    
    state = {
        // count: 0,
        value: this.props.value
    };

    // constructor(){
    //     super();
    //     // console.log("constructor", this); comment
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () =>{
        console.log('button clicked', this);
        // this.state.count++;  //old method which wont work in react beacuse react doesnt knew what to change 
        this.setState({value: this.state.value + 1});

    }
    handleDecrement = () => {
        // console.log('Hii')
        this.setState({value: this.state.value - 1});
    }

    resetCounter = () => {
        this.setState({value: this.state.value * 0});
    }

    
    render() { 
        return (
            <div>
                        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm m-2'> + </button>
                        <button onClick={this.handleDecrement} className= 'btn btn-danger btn-sm m-2'> - </button>
                        <button onClick={this.resetCounter} className = 'btn btn-warning btn-sm'>RESET</button>
                        <button onClick= {(counterId) => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">DELETE</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.state;
       
        return value === 0 ? <h1>0</h1> : <h1>{value}</h1>; 
    }
}
export default Counter;

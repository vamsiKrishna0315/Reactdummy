import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters: [
           {id: 1, value:0},
           {id: 2, value:5},
           {id: 3, value:9},
           {id: 4, value:6},
           {id: 5, value:3},
           {id: 6, value:0}
        ]
    }; 
    handleDelete = counterId => {
       console.log(counterId, 'called');
    const counters = this.state.counters.filter(c => c.id !== counterId);

    console.log("2", counterId);
    // this.setState({counters: counters});
    this.setState({ counters});
    };
    render() { 
       const filteredCounters =  this.state.counters.filter(counter => counter.value > 0);
       
       return (
            // this is traditional approach but we can use using an array 
            // <div>
            //     <Counter />
            //     <Counter />
            //     <Counter />
            //     <Counter />
            // </div>
            <div>
                {/* {this.state.Counters.map(counter => <Counter />)} */}
                {filteredCounters.map(counter => (
                <Counter onDelete = {this.handleDelete} //function 
                    key={counter.id}  //react will render 
                    //so, while passing all properties we can just pass it object
                    // value={counter.value}
                    // id={counter.id} 
                    counter={counter}
                    />))}     
            </div>
            
        );
    }
}
 
export default Counters;

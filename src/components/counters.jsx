import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        Counters: [
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
    };
    render() { 
       const filteredCounters =  this.state.Counters.filter(counter => counter.value > 0);
       
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
                <Counter onDelete = {this.handleDelete} key={counter.id}  value={counter.value} counterId={this.counterId} />))}     
            </div>
            
        );
    }
}
 
export default Counters;

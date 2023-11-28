import React, { Component } from 'react';


class Sale extends Component {
   
    state = {  } 
    
    render() { 
        const { onClick } = this.props;
        return (
            <button 
            onClick = {onClick}
            className= 'btn btn-success btn-sm'>SALE</button>
        );
    }
}
 
export default Sale;
import React, { Component } from 'react';

export default class Form extends Component{

    render(){
        return(
            <div>
                <label>Name:
                <input type="text" className='field' name='name' id="name"></input>
                </label>
               
            </div>
           
        ); 
    }
}
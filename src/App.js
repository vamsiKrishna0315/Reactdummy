import React, { Component } from 'react';
import Movies from './components/Movies/movies';
import "./App.css";

class App extends Component{
    render(){
        return(

            <main className='container'>
                 <movies />
            </main>

        );
    }
}

export default App;
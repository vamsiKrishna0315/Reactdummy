import React, { Component } from 'react';
import Movies from './components/Movies/movies';
import Count from './components/Movies/count';
import "./App.css";

class App extends Component{
    render(){
        return(
            <main className='container'>
                 <movies />
                 <count />
            </main>

        );
    }
}

export default App;
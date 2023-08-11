import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';

state = {
    movies: getMovies()
}

class count extends Component {
    state = {  } 
    render() {  
        return (
            <header>
                   <p>Hii</p>
            </header>

        );
    }
}
 
export default count ;
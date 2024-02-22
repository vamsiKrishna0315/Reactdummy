import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';

const state = {
    movies: getMovies()
}

class count extends Component {
    render() {  
        return (
            <header>
                   <p>Hii</p>
            </header>

        );
    }
}
 
export default count ;
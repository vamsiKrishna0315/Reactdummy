import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';


class Movies extends Component {
    state = {
        movies: getMovies()   //this is not the right way 
    };

    handleDelete = (movie) =>{
        // console.log(movies.name, 'was deleted');
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies })

        // this.setState({ movies: movies }) in modern js when both properties names are equal we can pass as 1
    };
    render() { 
        return <table className="table container">
            <thead>
                <tr >
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    {/* <th>Delete</th> */}
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                <tr key={movie._id} >
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm'> DELETE
                            
                        </button>
                    </td>
                </tr> ))}
                
            </tbody>
        </table>;
    }
}
export default  Movies;
 
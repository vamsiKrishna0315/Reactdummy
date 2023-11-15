import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';
import Like from './subComponents/like';
import Pagination from './subComponents/pagination';
import { paginate } from '../../utilis/paginate';


class Movies extends Component {
    state = {
        movies: getMovies(),   //this is not the right way 
        pageSize: 4,
        currentPage: 1
    };

    handleDelete = (movie) =>{
        // console.log(movies.name, 'was deleted');
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies })

        // this.setState({ movies: movies }) in modern js when both properties names are equal we can pass as 1
    };

    hanadleLike= (movie) => {
        console.log('Here in Like', movie);

        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };

    handlePageChange = (page) =>{
        // console.log('called pagination', page)
        this.setState({currentPage: page});
    };
    
    render() { 
        const {length: count} = this.state.movies;
        const{pageSize, currentPage, movies: allMovies} = this.state;
        if(count === 0) return <p className='container'>There are no movies</p>;
        const movies = paginate(allMovies,currentPage,pageSize);
        return(  
            <React.Fragment>

                <p className='container'>Total no of movies available: {count}</p>
        
        <table className="table container">
            <thead>
                <tr >
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Like</th>
                    <th>Delete</th> 
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => (
                <tr key={movie._id} >
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like onClicked = {() => this.hanadleLike(movie)}  liked ={movie.liked}/></td>
                    <td>
                        <button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm'> DELETE
                            
                        </button>
                    </td>
                </tr> ))}
                
            </tbody>
        </table>
                <Pagination itemCount={count} 
                pageSize={pageSize} 
                currentPage = {currentPage}
                onPageChange={this.handlePageChange} />
            </React.Fragment> 
            );     
    }
}
export default  Movies;
 
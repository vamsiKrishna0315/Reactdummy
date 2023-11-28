import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakegenreService';
import Pagination from './subComponents/pagination';
import { paginate } from '../../utilis/paginate';
import Filter from '../Movies/subComponents/filter';
import MoviesTable from '../moviesTable';


class Movies extends Component {
    state = {
        movies: [],   //this is not the right way 
        pageSize: 4,
        currentPage: 1,
        genres: []
    };

    componentDidMount() {
        const genres = [{name: "All Movies"},...getGenres()]
        this.setState({ movies: getMovies(), genres })
    }
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }
    handleDelete = (movie) => {
        // console.log(movies.name, 'was deleted');
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies })

        // this.setState({ movies: movies }) in modern js when both properties names are equal we can pass as 1
    };

    handleLike = (movie) => {
        console.log('Here in Like', movie);

        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handlePageChange = (page) => {
        // console.log('called pagination', page)
        this.setState({ currentPage: page });
    };

    handleSale = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.findIndex((m) => m._id === movie._id);
    
        if (index !== -1 && movies[index].numberInStock > 0) {
          movies[index] = { ...movies[index] };
          movies[index].numberInStock -= 1;
          this.setState({ movies });
        }
      };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies, selectedGenre } = this.state;
        if (count === 0) return <p className='container'>There are no movies</p>;
        const filtered = selectedGenre && selectedGenre._id ?
            allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const movies = paginate(filtered, currentPage, pageSize);
        return (
            <div className='row'>
                <div className="col-3">
                    <Filter items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect} /></div>
                <div className="col"> <p className='container'>Total no of movies available: {filtered.length}</p>

                <MoviesTable
                movies = {movies}
                onLike = {this.handleLike}
                onDelete = {this.handleDelete}
                onSale={this.handleSale}
                />
                    
                    <Pagination itemCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} /></div>


            </div>
        );
    }
}
export default Movies;

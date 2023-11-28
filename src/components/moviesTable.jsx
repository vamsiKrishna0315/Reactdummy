import React, { Component } from 'react';
import Like from './Movies/subComponents/like';
import Sale from './Movies/subComponents/sale'


const MoviesTable = (props) => {
    const { movies, onDelete, onLike,onSale } = props;
    return (  
        <table className="table container">
                        <thead>
                            <tr >
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th>Like</th>
                                <th>Delete</th>
                                <th>Sell</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => (
                                <tr key={movie._id} >
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><Like onClicked={() => onLike(movie)} liked={movie.liked} /></td>
                                    <td>
                                        <button onClick={() => onDelete(movie)} className='btn btn-danger btn-sm'> DELETE

                                        </button>
                                    </td>
                                    <td>
                                       <Sale
                                       onClick={() => onSale(movie)}
                                       />
                                    </td>
                                </tr>))}

                        </tbody>
                    </table>
    );
}
 
export default MoviesTable;
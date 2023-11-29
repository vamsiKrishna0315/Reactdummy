import React, { Component } from 'react';
import Like from './Movies/subComponents/like';
import Sale from './Movies/subComponents/sale'


const MoviesTable = (props) => {
    const { movies, onDelete, onLike,onSale, onSort } = props;
    return (    
        <table className="table container">
                        <thead>
                            <tr >
                                <th onClick={() => onSort('title')}>Title</th>
                                <th onClick={() => onSort('genre.name')}>Genre</th>
                                <th onClick={() => onSort('numberInStock')}>Stock</th>
                                <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
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
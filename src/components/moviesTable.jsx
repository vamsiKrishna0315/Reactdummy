import React, { Component } from 'react';
import Like from './Movies/subComponents/like';
import Sale from './Movies/subComponents/sale'
import TableHeader from './Movies/subComponents/tableHeader';
import TableBody from './Movies/subComponents/tableBody';

class MoviesTable extends Component {
    column  = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock '},
        {path: 'dailyRentalRate', label: 'Daily'},
        {key: "like"},
        {key: "delete"},
        {key: "sale"}
    ];
    render() { 
        const { movies, onDelete, onLike,onSale, onSort, sortColumn } = this.props;
    return (
      <table className="table container">
        <TableHeader
          columns={this.column}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={this.columns} data={movies} /> 
        {/* <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like onClicked={() => onLike(movie)} liked={movie.liked} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  {" "}
                  DELETE
                </button>
              </td>
              <td>
                <Sale onClick={() => onSale(movie)} />
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    );
        
    }
}
 
export default MoviesTable;
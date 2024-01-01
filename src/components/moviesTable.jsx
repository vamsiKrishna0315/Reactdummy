import React, { Component } from "react";
import Like from "./Movies/subComponents/like";
import Sale from "./Movies/subComponents/sale";
import TableHeader from "./Movies/subComponents/tableHeader";
import TableBody from "./Movies/subComponents/tableBody";

class MoviesTable extends Component {
  column = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock " },
    { path: "dailyRentalRate", label: "Daily" },
    {
        key: "like",
        content: movie => (
          <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}  />
        )
      },
      {
        key: "delete",
        content: movie => (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            DELETE
          </button>
        ),
      },
      { key: "sale", content: movie => ( <Sale onClick={() => this.props.onSale(movie)} /> ), },
      
  ];
  render() {
    const { movies, onDelete, onLike, onSale, onSort, sortColumn } = this.props;
    return (
      <table className="table container">
        <TableHeader
          columns={this.column}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={this.column} data={movies} />
        {/* <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
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

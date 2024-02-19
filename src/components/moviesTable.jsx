import React, { Component } from "react";
import Like from "./Movies/subComponents/like";
import Sale from "./Movies/subComponents/sale";
import Table from "./Movies/subComponents/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock " },
    { path: "dailyRentalRate", label: "Daily" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onClicked={() => this.props.onLike(movie)} />
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
    const {  movies, onSort, sortColumn } = this.props;
    console.log("38",this.props);
    return (
      <Table columns ={this.columns} data= {movies} sortColumn = {sortColumn} onSort = {onSort}/>
    );
  }
}

export default MoviesTable;
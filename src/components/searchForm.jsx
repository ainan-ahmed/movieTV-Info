import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Search for a movie ,TV series ..
        </h1>
        <div className="form-group">
          <input
            type="text"
            autoFocus
            autoComplete="off"
            className="form-control"
            id="search"
            name="search"
            onChange={(e) => this.props.onChange(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchForm;

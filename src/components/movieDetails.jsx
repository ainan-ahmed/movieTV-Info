import React, { Component } from "react";
import { connect } from 'react-redux';
import { getContent } from "../store/data";
import { Link } from 'react-router-dom';
import Spinner from "./spinner";
class MovieDetails extends Component {
  componentDidMount() {
    const id = this.props.match.params.id; 
    this.props.getContent(id)
    console.log(this.props.data.singleResult);
  }
  render() {
    const { singleResult:movie, loading } = this.props.data; 
    return (
      <div>
        {loading && <Spinner/>}
        <div className="row mt-3">
          <div className="col-md-4 card card-body border-dark">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8 border-dark">
            <h2 className="mb-2 font-weight-bold text-center">{movie.Title}</h2>
            <ul className="list-group border-dark">
              <li className="list-group-item border-dark">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item border-dark">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item border-dark">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item border-dark">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item border-dark">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item border-dark">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item border-dark">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body my-5 border-dark">
            <div className="col-md-12">
              <h3>About </h3>
              {movie.Plot}
              <hr />
              <a
                href={"https://www.imdb.com/title/" + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="ml-3 btn btn-info">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = (dispatch) => ({
  getContent: (id) => dispatch(getContent(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

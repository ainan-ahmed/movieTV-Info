import React, { Component } from "react";
import { loadData } from "../store/data";
import { connect } from "react-redux";
import SearchForm from "./searchForm";
import Spinner from "./spinner";
import { Link } from "react-router-dom";

class Home extends Component {
  handleQuery = (query) => {
    if (query.length > 1) this.props.loadData(query);
    //console.log(query);
  };
  render() {
    const { data } = this.props;
    const { Search,Error:error } = data.result; 
    console.log(data);
    return (
      <div>
        <SearchForm onChange={this.handleQuery} />
        {data.loading && <Spinner />}
        {error && (
          <div className="alert alert-danger h2 text-center">{error}</div>
        )}
        {/* {data.totalResults && <h1>Total {data.totalResults}</h1>} */}

        <div className="row mt-5">
          {Search &&
            Search.map((res) => (
              <div className="col-md-3 mb-5" key={res.imdbID}>
                <div className=" card card-body bg-dark text-center h-100 w-100">
                  <img
                    src={res.Poster}
                    alt=""
                    className="card-img-top w-100"
                    style={{ width: 100, objectFit: "cover" }}
                  />
                  <h4 className="text-light card-title">
                    {res.Title} {res.Year}
                  </h4>
                  <Link className="btn btn-primary" to={"/" + res.imdbID}>
                    Movie Details<i className="fas fas-chevron-right"></i>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = (dispatch) => ({
  loadData: (query) => dispatch(loadData(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;

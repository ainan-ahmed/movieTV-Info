import React, { Component } from "react";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Switch, Route } from "react-router";
import Footer from "./components/footer";
import MovieDetails from './components/movieDetails';


class App extends Component {
  render() {
    const store = configureStore();

    return (
      <React.Fragment>
        <Navbar />

          <Provider store={store}>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:id" component={MovieDetails}/> 
            </Switch>
            </div>
          </Provider>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;

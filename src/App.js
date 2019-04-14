import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Error from './Pages/404';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import SingleRecipe from './Pages/SingleRecipe';
class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" exact component={SingleRecipe} />
            <Route component={Error} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;

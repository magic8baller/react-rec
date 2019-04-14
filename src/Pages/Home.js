import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>in home</h2>
        <Header title="amazing recipes">
          <Link
            to="recipes"
            className="text-uppercase btn btn-secondary btn-lg mt-3"
          >
            Search Recipes
          </Link>
        </Header>
      </div>
    );
  }
}

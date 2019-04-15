import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { recipeData } from '../data/tempDetails';
export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      recipe: recipeData,
      id,
      loading: false
    };
  }
  render() {
    const {
      loading,
      recipe: {
        image_url,
        publisher,
        publisher_url,
        source_url,
        title,
        ingredients
      }
    } = this.state;

    if (loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                LOADING{' '}
                <span style={{ color: 'teal' }}>
                  <em>
                    <b>{title}...</b>
                  </em>
                </span>
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              to="/recipes"
              className="btn btn-warning mb-5 text-capitalize"
            >
              Return to Recipes List
            </Link>
            <img
              src={image_url}
              alt={title}
              className="d-block w-100"
              style={{ maxHeight: '30rem' }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize text-slanted">
              provided by {publisher}
            </h6>
            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitalize"
            >
              Publisher Webpage
            </a>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2 mx-2 text-capitalize"
            >
              Recipe URL
            </a>
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>
              {ingredients.map((ingredient, idx) => (
                <li key={idx} className="list-group-item text-slanted">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

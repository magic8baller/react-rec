import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getOne } from '../apiUtils';

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      // recipe: recipeData,
      recipe: {},
      id,
      isLoading: true
    };
  }
  async componentDidMount() {
    const url = getOne(this.state.id);

    try {
      const fetchResponse = await fetch(url);
      const recipeData = await fetchResponse.json();
      this.setState({
        recipe: recipeData.recipe,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      isLoading,
      recipe: {
        image_url,
        publisher,
        publisher_url,
        source_url,
        title,
        ingredients
      }
    } = this.state;
    if (isLoading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading recipe....
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
              className="btn btn-warning mb-5 text-capatilize"
            >
              return to recipes list
            </Link>
            <img
              src={image_url}
              className="d-block w-100"
              style={{ maxHeight: '30rem' }}
              alt="recipe"
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
              publisher webpage
            </a>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2 mx-2 text-capitalize"
            >
              recipe url
            </a>
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

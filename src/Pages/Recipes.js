import React, { Component } from 'react';
import { getAll } from '../apiUtils';
import RecipeList from '../Components/RecipeList';
import Search from '../Components/Search';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }
  state = {
    recipes: [],
    search: ''
  };

  async getRecipes() {
    const url = getAll();
    try {
      const fetchResponse = await fetch(url);
      const recipesJson = await fetchResponse.json();
      const { recipes } = recipesJson;
      this.setState({
        recipes
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}

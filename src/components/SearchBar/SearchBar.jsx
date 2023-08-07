import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  setQuery = ({ target }) => this.setState({ query: target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.setQuery}
          />
        </form>
      </header>
    );
  }
}

import { Component } from 'react';

import styles from './SearchBar.module.css';

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
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          z
          <input
            className={styles.SearchFormInput}
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

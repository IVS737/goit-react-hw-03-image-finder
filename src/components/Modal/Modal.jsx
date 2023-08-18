import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export class Modal extends Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onHide();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClick = e => {
    console.log('Click on Backdrop');
    if (e.target === e.currentTarget) {
      this.props.onHide();
    }
  };

  render() {
    const { children, show } = this.props;

    if (!show) return null;

    return createPortal(
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      document.querySelector('#root')
    );
  }
}

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

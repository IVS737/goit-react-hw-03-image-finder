import { Component } from 'react';
import { createPortal } from 'react-dom';

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

  handleClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onHide();
    }
  };

  render() {
    const { children, show, onHide } = this.props;

    if (!show) return null;

    return createPortal(
      <div className={styles.Overlay} onClick={onHide}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      document.querySelector('#root')
    );
  }
}

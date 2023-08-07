import { Component } from 'react';
import { createPortal } from 'react-dom';

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

  render() {
    const { children, show, onHide } = this.props;

    if (!show) return null;

    return createPortal(
      <div className="Overlay" onClick={onHide}>
        <div className="Modal">{children}</div>
      </div>,
      document.querySelector('#root')
    );
  }
}

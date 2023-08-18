import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageLi = ({ onClick, id, img, alt }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      onClick={onClick}
      className={styles.ImageGalleryItemImage}
      src={img}
      alt={alt}
    />
  </li>
);

ImageLi.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

import styles from './ImageGalleryItem.module.css';

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

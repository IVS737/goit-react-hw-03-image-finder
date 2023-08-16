import { ImageLi } from './components/ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export const ImageGallery = ({ onClick, imgArr }) => (
  <ul className={styles.ImageGallery}>
    {imgArr.map(item => (
      <ImageLi
        onClick={() => onClick(item.id)}
        key={item.id}
        img={item.previewURL}
        alt={item.tags}
      />
    ))}
  </ul>
);

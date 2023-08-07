import { ImageLi } from './components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ onClick, imgArr }) => (
  <ul className="ImageGallery">
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

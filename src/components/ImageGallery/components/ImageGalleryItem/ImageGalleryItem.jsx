export const ImageLi = ({ onClick, id, img, alt }) => (
  <li className="ImageGalleryItem">
    <img
      onClick={onClick}
      className="ImageGalleryItem-image"
      src={img}
      alt={alt}
    />
  </li>
);

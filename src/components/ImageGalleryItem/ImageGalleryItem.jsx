import PropTypes from 'prop-types';

import '../ImageGalleryItem/ImageGalleryItem.css';

const ImageGalleryItem = ({
  picture: { largeImageURL, previewURL, tags },
  onClick,
}) => {
  const handleImgClick = evt => {
    evt.preventDefault();
    onClick(largeImageURL);
  };

  return (
    <li className="photo-card">
      <div className="img-wrap">
        <img
          className="image"
          src={previewURL}
          alt={tags}
          onClick={handleImgClick}
        />
      </div>
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  pictures: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

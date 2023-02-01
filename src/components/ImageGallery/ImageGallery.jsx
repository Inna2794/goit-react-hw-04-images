import PropTypes from 'prop-types';
import '../ImageGallery/ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ pictures, onClick }) => {
  const handleImageClick = evt => {
    onClick(evt);
  };

  return (
    <ul className="gallery">
      {pictures.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          picture={picture}
          onClick={handleImageClick}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

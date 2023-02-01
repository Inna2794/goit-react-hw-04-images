import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ page, onClick }) => {
  let pageNumber = page;
  const handleClick = () => {
    pageNumber += 1;
    onClick(pageNumber);
  };

  return (
    <button type="button" onClick={handleClick} className="load_button">
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

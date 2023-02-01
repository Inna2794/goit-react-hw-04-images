import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import fetchPictures from './pictureApiService';
import SearchBar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [modalURL, setModalURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    const findPictures = fetchPictures(searchQuery, pageNumber);
    setLoadMore(true);
    findPictures
      .then(res => {
        if (res.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          setLoadMore(false);
          setIsLoading(false);
        }
        if (res.length < 12) {
          setLoadMore(false);
          setIsLoading(false);
        }
        setPictures(prevPictures => [...prevPictures, ...res]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery, pageNumber]);

  const formSubmitHandler = query => {
    setSearchQuery(query);
    setPageNumber(1);
    setPictures([]);
    setLoadMore(false);
  };

  const imageClickHandler = url => {
    setModalURL(url);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  console.log(pictures.length);

  return (
    <div>
      <SearchBar onSubmit={formSubmitHandler} />
      {pictures.length && (
        <div className="gallery-wrap">
          <ImageGallery
            pictures={pictures}
            onClick={imageClickHandler}
          ></ImageGallery>

          {loadMore && !isLoading && (
            <Button onClick={setPageNumber} page={pageNumber}></Button>
          )}
        </div>
      )}
      {isLoading && <Loader />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalURL} alt={pictures.tags} />
        </Modal>
      )}
    </div>
  );
};

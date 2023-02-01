import axios from 'axios';

const API_KEY = '30451625-24b88a788a5d1862c6d5c9df8';

async function fetchPictures(searchQuery, pageNumber) {
  const base_url = 'https://pixabay.com/api/?';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: 12,
  });
  const data = await axios.get(`${base_url}${searchParams}`);
  return data.data.hits;
}

export default fetchPictures;

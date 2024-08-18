import { useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g`;

export const useGif = () => {
  const [gif, setGif] = useState('');
  const [Loading, setLoading] = useState(false);

  async function fetchData(tag = '') {
    setLoading(true);
    try {
      const { data } = await axios.get(tag ? `${BASE_URL}&tag=${tag}` : BASE_URL);
      const imgSource = data.data.images.downsized_large.url;
      setGif(imgSource);
    } catch (error) {
      console.error('Error fetching the GIF:', error);
    } finally {
      setLoading(false);
    }
  }

  return { gif, Loading, fetchData };
};

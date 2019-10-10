import axios from 'axios';

const GIPHY_API_KEY = '73mVd9UuTdXQqRTyo603dGynHP7ga7Rk';

export const getGifFromGiphy = async (query = 'workout') => {
  try {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/random?q=${query}&api_key=${GIPHY_API_KEY}`);
    return response.data || {};
  } catch(error) {
    console.log(error);
  }
};
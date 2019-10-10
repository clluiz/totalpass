import axios from 'axios';

//WARNING: this key is here to simplify the test, never use API_KEYS like that!
const GIPHY_API_KEY = '73mVd9UuTdXQqRTyo603dGynHP7ga7Rk';

export const random = async (query = 'workout') => {
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/random?q=${query}&api_key=${GIPHY_API_KEY}`
    );
    return response.data || {};
  } catch (error) {
    console.log(error);
  }
};

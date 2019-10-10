import * as actions from './plan.actionTypes';
import { getGifFromGiphy } from '../../api/giphy';

export const goToPlan = index => {
  return {
    type: actions.GO_TO_PLAN,
    payload: index,
  };
};

export const getGif = query => async dispach => {
  const response = await getGifFromGiphy(query);
  dispach({
    type: actions.SET_GIF,
    payload: response && response.data ? response.data.image_url : null,
  });
};

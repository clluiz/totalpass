import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import app from './app.reducer';
import address from './components/Address/address.reducer';
import personalData from './components/PersonalData/personalData.reducer';
import picture from './components/UploadPicture/picture.reducer';
import plan from './components/Plan/plan.reducer';

const reducers = combineReducers({
  app,
  address,
  personalData,
  picture,
  plan,
});

export default createStore(reducers, applyMiddleware(thunk));

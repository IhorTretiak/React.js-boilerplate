// Core
import { configureStore } from '@reduxjs/toolkit';
// Helpers
import { isDevelopmentMode } from 'env';
// Instruments
import { rootReducer } from './rootReducer';


export const store = configureStore({
  reducer: rootReducer,
});

// Hot module replacement
if (isDevelopmentMode && module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line global-require
    const newRootReducer = require('./rootReducer');
    store.replaceReducer(newRootReducer);
  });
}

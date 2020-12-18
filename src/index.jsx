// Core
import { StrictMode } from 'react';
import { render } from 'react-dom';
// Domains
import { App } from './domains';
// Helpers
import { isDevelopmentMode } from './env';
// Utils
import { reportWebVitals } from './utils';


const initApp = () => {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('app-root'),
  );
};

initApp();

// Redux Store hot module replacement
if (isDevelopmentMode && module.hot) {
  module.hot.accept('./domains/app/index.jsx', initApp);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

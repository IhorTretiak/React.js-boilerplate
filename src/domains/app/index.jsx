// Core
import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Redux
import { Provider } from 'react-redux';
import { store } from 'store';
// i18n
import { initI18n } from 'i18n';
// Style
import './App.scss';
// Components
import { Typography } from 'components';
// Assets
import logo from './assets/logo.svg';


initI18n();

export function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Provider store={store}>
        <Helmet>
          <title>Hello from React App</title>
        </Helmet>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <a
              className="app-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>
                {t('Learn React')}
              </Typography>
            </a>
          </header>
        </div>
      </Provider>
    </HelmetProvider>
  );
}

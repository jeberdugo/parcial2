
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

function getLocale(){
  const lang = navigator.language;
  return lang.substring(0,2);
}

ReactDOM.render(
  <IntlProvider locale={getLocale() === 'es' ? 'es' : 'en'} messages= {getLocale() === 'es' ? localeEsMessages : localeEnMessages}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </IntlProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
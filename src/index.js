import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import localeEnMessages from "./i18n/en.json";
import localeEsMessages from "./i18n/es.json";
import {IntlProvider} from "react-intl";

const rawLocale = (navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en').toLowerCase();
let locale;
if (rawLocale.startsWith("en")) {
    locale = "en"
} else if (rawLocale.startsWith("es")) {
    locale = "es"
}
const messages = locale.startsWith("en") ? localeEnMessages : localeEsMessages

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <IntlProvider locale={locale} messages={messages}>
            <App locale={locale}/>
        </IntlProvider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

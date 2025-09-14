import { React,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import FRANCAIS from './lang/fr.json'
import KIRUNDI from './lang/ki.json' 
// import ENGLISH from './lang/en.json'
// import KISWAHILI from './lang/sw.json'
import { IntlProvider } from 'react-intl'
import { Provider, useSelector } from 'react-redux'
import store from './store/index.js'
import { localeSelector } from './store/selectors/appSelectors.js'
import { BrowserRouter } from 'react-router-dom'



const IntlApp = () => {

  const locale = useSelector(localeSelector)
  localStorage.setItem('locale', locale);
    var messages
    switch (locale) {
              case 'fr':
                        messages = FRANCAIS
                        break
              default:
                        messages = KIRUNDI
    }
    return (
              <IntlProvider messages={messages} locale={locale} defaultLocale="ki">
                        <App />
              </IntlProvider>
    )
} 

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <Provider store={store}>
        <IntlApp/>
    </Provider>
  </StrictMode>,
)

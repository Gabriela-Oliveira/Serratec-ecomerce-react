import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './hooks';

import GlobalStyles from './styles/global';


function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App;
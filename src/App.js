import React from 'react';
<<<<<<< HEAD
import GlobalStyle from './styles/globalStyles';
function App() {
  return (
    <>
    <GlobalStyle />
    <h1>Hello Boys and Girl</h1>

=======
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
>>>>>>> 514f456647197cce0218428fe3379c439ff40355
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from './context/GlobalContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
    </GlobalContext>

  );
}

export default App;

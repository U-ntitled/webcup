import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import { GlobalContext } from './Context/GlobalContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>

  );
}

export default App;

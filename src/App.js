import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { CookiesProvider} from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;

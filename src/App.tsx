import React, {useEffect} from 'react';
import {getMenu, getProductById, getProducts} from "./api/products";

function App() {
  useEffect(() => {
    getProducts();
    getMenu();
    getProductById('1');
  } , [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

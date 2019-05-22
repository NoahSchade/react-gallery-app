import React from 'react';
import '../../src/css/style.css';
import Key from '../other/config.js';
import Header from './Header';
import Gallery from './Gallery';


function App() {
  return (
    <div className="container">
      <Header />
      <Gallery />
    </div>
  );
}

export default App;

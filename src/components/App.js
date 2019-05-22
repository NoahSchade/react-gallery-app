import React from 'react';
import '../other/config.js';
import '../../src/css/style.css';
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

import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import './Styles/main.scss'

function App() {
  return (
    <div className="App">
      <div className='container-fluid nopadding'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
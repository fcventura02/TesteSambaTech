import React from 'react';
import Main from './pages/main';
import breakingBad from './img/BreakingBad.png'
import './styles.css'

function App() {
  return (
    <div className="App">
      <div className='imagem'>
        <img className='br-ba' src={breakingBad} alt="Breacking Bad" />
      </div>
      <Main />
    </div>
  );
}

export default App;

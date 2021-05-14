import React from 'react';
import './App.css';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header userName={"Atul Tameshwari"} userScore={0} />
    </div>
  );
}

export default App;

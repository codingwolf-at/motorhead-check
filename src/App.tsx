import {useState} from "react";
import './App.css';
import { Header } from './components';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Header userName={"Atul Tameshwari"} userScore={score} />
      <button 
        onClick={() => setScore(score => score+1)}
        style={{padding: "0.5rem", margin: "0.5rem"}}
      >Incr</button>
      <button 
        onClick={() => setScore(score => score-1)}
        style={{padding: "0.5rem", margin: "0.5rem"}}
      >Decr</button>
    </div>
  );
}

export default App;

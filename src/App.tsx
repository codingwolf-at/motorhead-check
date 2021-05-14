import {useState} from "react";
import './App.css';
import { Header } from './components';
import {Button} from "@chakra-ui/react";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Header userName={"Atul Tameshwari"} userScore={score} />
      <Button 
        onClick={() => setScore(score => score+1)}
      >Incr</Button>
      <Button 
        onClick={() => setScore(score => score-1)}
      >Decr</Button>
    </div>
  );
}

export default App;

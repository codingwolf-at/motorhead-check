import { Header } from './components';
import {Button} from "@chakra-ui/react";
import { useQuiz } from './custom hooks/useQuiz';

function App() {
  const { state, dispatch } = useQuiz();
  return (
    <div className="App">
      <Header userName={"Atul Tameshwari"} userScore={state.score} currentQueNo={state.currentQueNo} />
      <Button 
        onClick={() => dispatch({type: "INCREMENT", payload: 1})}
      >Incr</Button>
      <Button 
        onClick={() => dispatch({type: "DECREMENT", payload: 1})}
      >Decr</Button>
    </div>
  );
}

export default App;

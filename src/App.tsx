import {useReducer} from "react";
import './App.css';
import { Header } from './components';
import {Button} from "@chakra-ui/react";

function App() {
  const initialState = {
    score: 0,
    currentQueNo: 1
  }

  type ACTIONTYPE = 
    | {type: "INCREMENT"; payload: number}
    | {type: "DECREMENT"; payload: number};

  const quizReducer = (state: typeof initialState, action: ACTIONTYPE): typeof initialState => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          score: state.score + action.payload,
          currentQueNo: state.currentQueNo + 1
        };
      case "DECREMENT":
        return {
          ...state,
          score: state.score - action.payload,
          currentQueNo: state.currentQueNo + 1
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(quizReducer, initialState);

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

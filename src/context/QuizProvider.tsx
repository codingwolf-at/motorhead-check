import React, { ContextType, createContext, useReducer } from "react";
import { InitialValue, ACTIONTYPE } from "./QuizProvider.types";

export const QuizContext = createContext<any>(null);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{state, dispatch}} >
      {children}
    </QuizContext.Provider>
  )
}

export const initialState: InitialValue = {
  score: 0,
  currentQueNo: 1
}

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
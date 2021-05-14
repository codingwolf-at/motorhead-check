import { Options, Questions } from "../data/Quiz.types";

export const scoreCounter = (currentScore: number, question: Questions, selectedOption: Options): number => {
  if (selectedOption.isRight) {
    return currentScore + question.points;
  } else {
    return currentScore - question.points;
  }
}
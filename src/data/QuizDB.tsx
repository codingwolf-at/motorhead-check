import { Quiz } from "./Quiz.types";

export const QuizDB: Quiz = {
  name: "Motor-Head Check Quiz",
  questions: [
    {
      id: 1,
      question: "Capital of MP?",
      points: 5,
      options: [
        {
          text: "Bhopal",
          isRight: true
        },
        {
          text: "Jabalpur",
          isRight: false
        },
        {
          text: "Gwalior",
          isRight: false
        }, 
        {
          text: "Indore",
          isRight: false 
        }
      ]
    }
  ]
}
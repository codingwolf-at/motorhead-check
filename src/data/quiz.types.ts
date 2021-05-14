export type Options = {
  text: string;
  isRight: boolean;
}

export type Questions = {
  id: number;
  question: string;
  points: number,
  options: Options[]
}

export type Quiz = {
  name: string;
  questions: Questions[]
}
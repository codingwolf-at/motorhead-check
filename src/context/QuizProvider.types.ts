export type InitialValue = {
  score: number;
  currentQueNo: number;
}

export type ACTIONTYPE = 
| {type: "INCREMENT"; payload: number}
| {type: "DECREMENT"; payload: number};

export type ContextType = {
  state: InitialValue;
  dispatch: Function;
}
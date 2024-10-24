import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";


const initialState = 0;


// on accepts the action you want to listen
// The second argument to On is the function to update the value. This function is executed by NgRx 
export const counterReducer = createReducer(initialState, on(increment, (state)=> state + 1));


// alternative approach
// export function counterReducer(state = initialState) {
//     return state;
// }
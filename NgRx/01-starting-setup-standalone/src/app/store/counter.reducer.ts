import { Action, createReducer, on } from "@ngrx/store";
import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";

//import { increment } from "./counter.actions";


const initialState = 0;


// on accepts the action you want to listen
// The second argument to On is the function to update the value. This function is executed by NgRx 
//export const counterReducer = createReducer(initialState, on(increment, (state, action)=> state + action.value));


// alternative approach
// export function counterReducer(state = initialState) {
//     return state;
// }

export function counterReducer(state = initialState, action: CounterActions | Action) {
   
    if(action.type ===  INCREMENT)
    {
      state = state + (action as IncrementAction).value;
    }
    return state;
}
import { createReducer } from "@ngrx/store";


const initialState = 0;


//export const counterReducer = createReducer(initialState);


//alternative approach
export function counterReducer(state = initialState) {
    return state;
}
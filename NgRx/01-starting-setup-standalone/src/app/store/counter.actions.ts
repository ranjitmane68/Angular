import { Action, createAction, props } from "@ngrx/store";

//Specify identifier to action
//Convention : [FeatureName] ActionName
//export const increment = createAction('[Counter] Increment', props<{value: number}>());

export const INCREMENT =  '[Counter] Increment';
export class IncrementAction implements Action 
{
    readonly type = INCREMENT;
    
    constructor(public value: number) {

    }
}

export type CounterActions = IncrementAction;
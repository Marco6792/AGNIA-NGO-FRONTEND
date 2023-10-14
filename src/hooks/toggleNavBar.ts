import { ItoggleState } from "./types/type";

export const initState: ItoggleState = {
    toggle: false
}

export const enum REDUCER_ACTION_TYPE {
   TOGGLENAV, 
}

export type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string
}

export const reducer = (state: ItoggleState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.TOGGLENAV: 
            return {...state, toggle: !state.toggle}
        default: 
       throw new Error()
 }
}
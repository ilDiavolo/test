


import * as fromUI from './pago.actions'



export interface PayState {
    isLoading: boolean
    isValid: boolean
}

const initState: PayState = {
    isLoading: false,
    isValid: false
}

export function pagoReducer( state = initState, action: fromUI.acciones):
PayState {
    
    switch (action.type) {
        case fromUI.ON_SUBMIT:
            return { ...state, isLoading: true  }

        case fromUI.OFF_SUBMIT:
            return {  ...state, isLoading: false  }
        
        case fromUI.SET_FORM:

            return{ 
                ...state,
                isValid: action.formVal
             }

        default:
            return state
    }                                 
}
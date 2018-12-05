





import { ActionReducerMap } from '@ngrx/store';

import * as fromPago from './pago/redux/pago.reducer'

export interface AppState {
    pago: fromPago.PayState
}

export const appReducers: ActionReducerMap<AppState> = {
    pago: fromPago.pagoReducer
}

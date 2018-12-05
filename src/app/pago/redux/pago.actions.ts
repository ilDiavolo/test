




import { Action } from '@ngrx/store';



export const ON_SUBMIT  = '[PAGO] ON  Validar'
export const OFF_SUBMIT = '[PAGO] OFF Validar'
export const SET_FORM   = '[PAGO] Modificar Form'


export class ActicarValidacionAction implements Action {
    readonly type = ON_SUBMIT
}
export class FinalizarValidacionAction implements Action {
    readonly type = OFF_SUBMIT
}
export class ValorDelFormularioAction implements Action {
    readonly type = SET_FORM
    constructor( public formVal: boolean ){}
}


export type acciones =  ActicarValidacionAction | 
                        FinalizarValidacionAction |
                        ValorDelFormularioAction
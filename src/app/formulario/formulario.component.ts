import { FinalizarValidacionAction } from './../pago/redux/pago.actions';
import { AppState } from './../app.reducers';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ValorDelFormularioAction } from '../pago/redux/pago.actions';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  forma: FormGroup
  message = false
  // validarAction: boolean

  constructor( private store: Store<AppState> ) { 

    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'pass': new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this.store.select('pago').subscribe(res => {
        if (res.isLoading) {
          // console.log('llamo a validar formulario')
          this.validarFormulario()
        }
    })
  }

  validarFormulario(){
    // console.log(this.forma.valid)
    this.message = this.forma.invalid
    // console.log( 'mensaje', this.mesage)
    this.store.dispatch( new ValorDelFormularioAction(this.forma.valid) )
    this.store.dispatch( new FinalizarValidacionAction())
  }

}

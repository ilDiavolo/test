import { AppState } from './../app.reducers';
import { PayState } from './redux/pago.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { ValorDelFormularioAction, ActicarValidacionAction } from './redux/pago.actions';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit, OnDestroy {
  

  forma: FormGroup
  formularioValue: boolean

  constructor(  private store: Store<AppState>) { }

  ngOnInit() {
      this.store.select('pago').subscribe( res => {
          if (res.isLoading) {
            this.formularioValue = res.isValid
            // console.log('gooo')
          }
      })

  }

  enviar(){
    // console.log('enviando')
    this.store.dispatch( new ActicarValidacionAction() )
    console.log('formularioValue', this.formularioValue)
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  
}

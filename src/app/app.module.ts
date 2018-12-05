import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Cambiar fechas a español
import { registerLocaleData } from '@angular/common'
import localeES from '@angular/common/locales/es'
registerLocaleData(localeES, 'es')

import { AppComponent } from './app.component';
import { RutasRoutingModule } from './app-routing.module'

import { StoreModule } from '@ngrx/store'
import { appReducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { ReactiveFormsModule } from '@angular/forms'
 
import { environment } from 'src/environments/environment'
import { PagoComponent } from './pago/pago.component'
import { FormularioComponent } from './formulario/formulario.component'

import { CarouselComponent } from './carousel/carousel.component'

@NgModule({
  declarations: [
    AppComponent,
    PagoComponent,
    FormularioComponent,
    CarouselComponent,
   
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

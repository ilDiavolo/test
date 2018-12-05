import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagoComponent } from './pago/pago.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  // {
  //   path: '', component: PagoComponent
  // },
  {
    path: '', component: CarouselComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }

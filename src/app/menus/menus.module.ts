import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { ComidasComponent } from './pages/comidas/comidas.component';
import { DesayunosComponent } from './pages/desayunos/desayunos.component';
import { PostresComponent } from './pages/postres/postres.component';
import { CenasComponent } from './pages/cenas/cenas.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';

import { PrecioPipe } from './pipes/precio.pipes';
import { TotalPipe } from './pipes/total.pipe';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    BebidasComponent,
    ComidasComponent,
    DesayunosComponent,
    PostresComponent,
    CenasComponent,
    MenuCardComponent,
    CarritoComponent,
    PrecioPipe,
    TotalPipe,
    InicioComponent,
    ListadoComponent,
    FormularioComponent,
  ],
  exports:[
    BebidasComponent,
    ComidasComponent,
    DesayunosComponent,
    PostresComponent,
    MenuCardComponent,
    CarritoComponent,
    InicioComponent,
    ListadoComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class MenusModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasComponent } from './menus/pages/bebidas/bebidas.component';
import { ComidasComponent } from './menus/pages/comidas/comidas.component';
import { DesayunosComponent } from './menus/pages/desayunos/desayunos.component';
import { PostresComponent } from './menus/pages/postres/postres.component';
import { CenasComponent } from './menus/pages/cenas/cenas.component';
import { InicioComponent } from './menus/pages/inicio/inicio.component';
import { FormularioComponent } from './menus/components/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch:'full'
  },
  {
    path: 'desayunos',
    component: DesayunosComponent,
  },
  {
    path: 'comidas',
    component: ComidasComponent
  },
  {
    path: 'cenas',
    component: CenasComponent
  },
  {
    path: 'postres',
    component: PostresComponent
  },
  {
    path: 'bebidas',
    component: BebidasComponent
  },
  {
    path: 'editar/:id',
    component: FormularioComponent
  },
  {
    path: 'agregar',
    component: FormularioComponent
  }
  // Ejemplo de carga Lazy-loading
  /*{
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
    .then( m => m.AuthModule)
  },*/
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

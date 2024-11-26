import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcortadorDeEnlaceComponent } from './pages/acortador-de-enlace/acortador-de-enlace.component';
import { ListaDeEnlacesComponent } from './pages/lista-de-enlaces/lista-de-enlaces.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'acortador-de-enlace', component:AcortadorDeEnlaceComponent},
  {path:'lista-de-enlaces', component:ListaDeEnlacesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

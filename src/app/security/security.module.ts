import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { AcortadorDeEnlaceComponent } from './pages/acortador-de-enlace/acortador-de-enlace.component';
import { ListaDeEnlacesComponent } from './pages/lista-de-enlaces/lista-de-enlaces.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { OrdenarPipe } from './pipe/ordenar.pipe';


@NgModule({
  declarations: [
    AcortadorDeEnlaceComponent,
    ListaDeEnlacesComponent,
    InicioComponent,
    OrdenarPipe
  ],exports:[ListaDeEnlacesComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule
  ]
})
export class SecurityModule { }

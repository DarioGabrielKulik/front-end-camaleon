import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPipe } from './pipe/admin.pipe';
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';
import { ListaAdminComponent } from './pages/lista-admin/lista-admin.component';


@NgModule({
  declarations: [
    AdminPipe,
    InicioAdminComponent,
    ListaAdminComponent
  ],exports:[ AdminPipe],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

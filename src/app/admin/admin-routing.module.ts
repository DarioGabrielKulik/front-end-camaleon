import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';
import { ListaAdminComponent } from './pages/lista-admin/lista-admin.component';

const routes: Routes = [
  {path:'inicio',component:InicioAdminComponent},
  {path:'lista',component:ListaAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

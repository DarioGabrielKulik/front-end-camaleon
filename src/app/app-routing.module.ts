import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path:'',loadChildren: () => import('./home/home-routing.module').then( m => m.HomeRoutingModule)},
  {path:'auth', loadChildren: () => import('./security/security-routing.module').then( m => m.SecurityRoutingModule),canActivate:[authGuard]},
  {path:'util', loadChildren: () => import('./utils/utils-routing.module').then( m => m.UtilsRoutingModule)},
  {path:'admin', loadChildren: () => import('./admin/admin-routing.module').then( m => m.AdminRoutingModule),canActivate:[adminGuard]},
  {path:'**', redirectTo:'/util/no-funciona'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

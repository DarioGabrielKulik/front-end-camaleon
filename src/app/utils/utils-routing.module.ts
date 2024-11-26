import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { EnviarCorreoComponent } from './pages/enviar-correo/enviar-correo.component';
import { RecuperarContrasenaComponent } from './pages/recuperar-contrasena/recuperar-contrasena.component';
import { VerificadoComponent } from './pages/verificado/verificado.component';
import { EnvioMailRecuperacionComponent } from './pages/envio-mail-recuperacion/envio-mail-recuperacion.component';
import { CambioContrasenaComponent } from './pages/cambio-contrasena/cambio-contrasena.component';
import { PasswordVerificadoComponent } from './pages/password-verificado/password-verificado.component';

const routes: Routes = [
  {path:'no-funciona',component:NoFoundComponent},
  {path:'enviar-correo',component:EnviarCorreoComponent},
  {path:'recuperar-password',component:RecuperarContrasenaComponent},
  {path:'verificado',component:VerificadoComponent},
  {path:'enviar-correo-recuperacion',component:EnvioMailRecuperacionComponent},
  {path:'cambio-password', component:CambioContrasenaComponent},
  {path:'password-verificado', component:PasswordVerificadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilsRoutingModule { }

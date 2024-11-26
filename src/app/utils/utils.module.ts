import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { EnviarCorreoComponent } from './pages/enviar-correo/enviar-correo.component';
import { RecuperarContrasenaComponent } from './pages/recuperar-contrasena/recuperar-contrasena.component';
import { VerificadoComponent } from './pages/verificado/verificado.component';
import { EnvioMailRecuperacionComponent } from './pages/envio-mail-recuperacion/envio-mail-recuperacion.component';
import { CambioContrasenaComponent } from './pages/cambio-contrasena/cambio-contrasena.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordVerificadoComponent } from './pages/password-verificado/password-verificado.component';
import { UtilSnipperComponent } from './components/util-snipper/util-snipper.component';


@NgModule({
  declarations: [
    NoFoundComponent,
    EnviarCorreoComponent,
    RecuperarContrasenaComponent,
    VerificadoComponent,
    EnvioMailRecuperacionComponent,
    CambioContrasenaComponent,
    PasswordVerificadoComponent,
    UtilSnipperComponent
  ],exports:[ RecuperarContrasenaComponent,  CambioContrasenaComponent],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UtilsModule { }

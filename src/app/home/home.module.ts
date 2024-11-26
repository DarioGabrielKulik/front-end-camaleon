import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SnipperComponent } from './components/snipper/snipper.component';


@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    SnipperComponent
  ],exports:[
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

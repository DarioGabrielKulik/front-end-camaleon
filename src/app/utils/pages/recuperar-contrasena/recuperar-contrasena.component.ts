import { Component } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css'
})
export class RecuperarContrasenaComponent {
email!:string;
text!:string;
validar:boolean = false
snipper:boolean = false;
constructor(private util:UtilsService, private router:Router){}

recuperacion(){
  this.snipper = true;
  this.util.getRecuperacion(this.email).subscribe( resp => {
    if(resp.mensaje === true){
      this.snipper = false;
      this.router.navigate(['/util/enviar-correo-recuperacion']);
    }
  }, (error) => {
    this.text = error.error.error; 
    this.validar = true;
    this.snipper = false;
    setTimeout( () => {
      this.validar = false;  
    },3000 )
  })
}

}

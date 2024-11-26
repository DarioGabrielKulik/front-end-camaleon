import { Component } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.component.html',
  styleUrl: './cambio-contrasena.component.css'
})
export class CambioContrasenaComponent {
confirmarPassword:boolean = false;
error:boolean = false;
validarFormulario:boolean = false;
mensaje!:string;
codigo!:string

constructor(private util:UtilsService, private router:Router, private fd:FormBuilder){}


miFormulario: FormGroup = this.fd.group({
  codigo:['',Validators.required],
  password:['',[Validators.required, Validators.minLength(6)]],
  password2:['',[Validators.required, Validators.minLength(6)]]
}

)

validar(campo:string){
  return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
}

validarPassword(){  
  if( this.miFormulario.controls['password'].value != this.miFormulario.controls['password2'].value){
    this.confirmarPassword = true;
    setTimeout( () => {
      this.confirmarPassword = false;
    },3000 )
  }else{
    this.validarFormulario = true; 
  }
}

guardar(){
  if(this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched();
    return
  }if(this.validarFormulario){
    this.cambiarPassword();
    this.miFormulario.reset();
    return
  }
}
cambiarPassword(){
  this.util.getRecuperar(this.miFormulario.value).subscribe({ next: (resp) => {
    if(resp.mensaje === true){
      this.router.navigate(['/util/password-verificado']);
    }
  }, error: (error) => {
    if(error.error.error === true){
      this.error = true;
      this.mensaje = error.error.mensaje;
      setTimeout( () => {
        this.error = false;
      },3000 )
    }
  } }) 
}

}





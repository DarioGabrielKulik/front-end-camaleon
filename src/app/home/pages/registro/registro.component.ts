import { Component } from '@angular/core';
import { RegistroLoginService } from '../../services/registrar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from '../../interfaces/UsuarioInterfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  permisos!: Mensaje ;
  validacion:boolean = false;
  text!:string;
  snipper:boolean = false;
  constructor(private api:RegistroLoginService, private fb:FormBuilder, private router: Router){}

  miFormulario:FormGroup = this.fb.group({
  nombre:['',[Validators.required, Validators.minLength(4)]],
  email:['',Validators.required],
  password:['',[Validators.required, Validators.minLength(6)]]
  })
  
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }else{
      this.registrar(this.miFormulario.value);
      this.miFormulario.reset();
      return
    }

  }

  registrar(usuario:any){
    this.snipper = true
    this.api.registro(usuario).subscribe( (resp: Mensaje)=> {
      this.permisos = resp;
      if(this.permisos.permisos === false){
        this.snipper = false
        this.router.navigate(['/util/enviar-correo']);
      }  
      },(error) => {
       if(error.error.permisos === false){
          this.snipper = false
          this.validacion = true
          this.text = error.error.mensaje 
          setTimeout( () => {
            this.validacion = false
          },3500 )        
       }
       
      })
  }

  validar(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }
}

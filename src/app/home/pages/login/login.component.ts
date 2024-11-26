import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  validacion:boolean = false;
  text!:string;
  constructor(private api:LoginService, private fb:FormBuilder, private router:Router){}


  miFormulario:FormGroup = this.fb.group({
    email:[,Validators.required],
    password:[,Validators.required]
  })


  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }else{
      const email = this.miFormulario?.controls['email']?.value;
      const password = this.miFormulario?.controls['password']?.value;
      this.loguiarse(email , password);
      console.log(email,password)
      this.miFormulario.reset();
      return
    }

  }

  loguiarse(email:string, password:string){
    this.api.login(email,password).subscribe( resp => {
      console.log(resp)
      if(resp.permisos){
        const token = {
          id:resp.id,
          nombre:resp.nombre,
          email:email,
          password:password,
          permisos:resp.permisos,  
          rol: resp.roles                
        }
        localStorage.setItem('token', JSON.stringify(token)); 
        const redirect = localStorage.getItem('token'); 
        if(redirect){
          const data = JSON.parse(redirect);
          if(data.permisos && data.rol === 'USER'){
            this.router.navigate(['/auth/inicio']);     
          }
          if(data.permisos && data.rol === 'ADMIN'){
            this.router.navigate(['/admin/inicio']);     
          }
        }
      }else{

      }
    }, (error) => {
      console.log(error)
      if(error.error.error === 'Unauthorized'  ){
        this.validacion = true
        this.text = 'Contraseña o Mail incorrecto'
        setTimeout( () => {
          this.validacion = false
        },3500 ) 
      }if (error.error.error === 'Forbidden') {
        this.validacion = true
        this.text = 'No estas verificado'
        setTimeout( () => {
          this.validacion = false
        },3500 ) 
      } else {
        this.validacion = true
        this.text = error.error.error
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

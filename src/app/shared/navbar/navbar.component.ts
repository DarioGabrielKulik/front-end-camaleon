import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
nombre!:string;



constructor(private router:Router){}

ngOnInit(){
    this.verificarInvitado();
    this.verificarUsuario();
    this.verificarAdmin();
}


verificarInvitado(){
    const token = localStorage.getItem('token');
    if (token) {
    return false 
    }
    return true; 
}

verificarUsuario(){
  const token = localStorage.getItem('token');

  if(token){
  const data = JSON.parse(token);      
  if (data.permisos && data.rol === 'USER') {  
    this.nombre = data.nombre;
    return true;
  }
  }
  return false;

}

verificarAdmin(){
  const token = localStorage.getItem('token');

  if(token){
  const data = JSON.parse(token);      
  if (data.permisos && data.rol === 'ADMIN') { 
    this.nombre = data.nombre;        
    return true;
  }
  }
  return false;

}



logaut(){
  localStorage.removeItem('token');
  this.router.navigate(['/login'])
}

}

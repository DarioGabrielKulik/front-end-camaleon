import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrl: './inicio-admin.component.css'
})
export class InicioAdminComponent {
  nombre!:string;

  ngOnInit(){
    this.getNombre();
  }
  
  getNombre(){
    const token = localStorage.getItem('token')
    if(token){
      const data = JSON.parse(token);
      this.nombre = data.nombre;
    }
  }
}

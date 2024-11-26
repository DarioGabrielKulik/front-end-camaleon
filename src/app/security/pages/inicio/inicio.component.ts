import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
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

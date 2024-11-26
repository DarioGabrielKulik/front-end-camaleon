import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Usuario } from '../../interfaces/usuarioInterface';

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrl: './lista-admin.component.css'
})
export class ListaAdminComponent {
  usuarios: Usuario[] = []
  order:string = 'sin valor';
  cambio:boolean = false;
  constructor(private admin:AdminService){}

  ngOnInit(){
    this.getLista();
  }

  getLista(){

    this.admin.getLista().subscribe( resp => {
      this.usuarios = resp;
    }, (error) => {
      console.log(error)
    })

  }

  eliminar(id:number){
    this.admin.deleteUrl(id).subscribe(resp => {
     this.getLista();
    });
  }

  orderNombre(){
    this.cambio = !this.cambio;
    if(this.cambio){
      this.order = 'nombreMenor'
    }else{
      this.order = 'nombreMayor'
    }
  }
  orderEmail(){
    this.cambio = !this.cambio;
    if(this.cambio){
      this.order = 'emailMenor'
    }else{
      this.order = 'emailMayor'
    }
  }

  reset(){
    this.getLista();
    this.order = 'sin valor'
  }
}

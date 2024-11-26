import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Url } from '../../interfaces/UrlInterfaces';

@Component({
  selector: 'app-lista-de-enlaces',
  templateUrl: './lista-de-enlaces.component.html',
  styleUrl: './lista-de-enlaces.component.css'
})
export class ListaDeEnlacesComponent {
  lista:Url[] = [];
  order:string = 'sin valor';
  cambio:boolean = false;
  constructor(private api:ApiService){}

  ngOnInit(){
    this.buscar();
  }

  eliminar(url:string){
    this.api.deleteUrl(url).subscribe(resp => {
      this.buscar()
    });
    
  }

  buscar(){
    this.api.getLista().subscribe( resp => {
      this.lista = resp;  
    } )
  }

  orderNombre(){
    this.cambio = !this.cambio;
    if(this.cambio){
      this.order = 'nombreMenor'
    }else{
      this.order = 'nombreMayor'
    }
  }
  ordervisitas(){
    this.cambio = !this.cambio;
    if(this.cambio){
      this.order = 'visitasMenor'
    }else{
      this.order = 'visitasMayor'
    }
  }
  orderUrl(){
    this.cambio = !this.cambio;
    if(this.cambio){
      this.order = 'urlMenor'
    }else{
      this.order = 'urlMayor'
    }
  }
  reset(){
    this.buscar();
    this.order = 'sin valor'
  }
}

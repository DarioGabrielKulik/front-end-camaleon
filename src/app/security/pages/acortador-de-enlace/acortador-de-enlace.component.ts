import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Url, UrlResponse } from '../../interfaces/UrlInterfaces';

@Component({
  selector: 'app-acortador-de-enlace',
  templateUrl: './acortador-de-enlace.component.html',
  styleUrl: './acortador-de-enlace.component.css'
})
export class AcortadorDeEnlaceComponent {
  url:string = '';
  nombre:string= '';
  resp!:UrlResponse;
  text!:string;
  validacion:boolean = false;
constructor(private api:ApiService){}

convertir(){
  this.api.postUrl(this.url, this.nombre.toLowerCase()).subscribe(resp=> {
    this.resp = resp;
  }, (error) => {
    if(error.error.error === 'Bad Request'){
      this.text = 'Url demasiada larga'
      this.validacion = true
      setTimeout( () => {
        this.validacion = false
      },2500 )
    }
  });
}
}

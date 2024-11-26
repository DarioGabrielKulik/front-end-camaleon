import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../interfaces/usuarioInterface';

@Pipe({
  name: 'admin'
})
export class AdminPipe implements PipeTransform {

  transform(usuario: Usuario[], ordenarPor:string = 'sin valor'): Usuario[] {

    switch(ordenarPor){
      case'nombreMenor' :
      return usuario = usuario.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1 );
      case'nombreMayor' :
      return usuario = usuario.sort( (a,b) => (b.nombre > a.nombre) ? 1 : -1 ); 
      case'emailMenor' :
      return usuario = usuario.sort( (a,b) => (a.email > b.email) ? 1 : -1 ); 
      case'emailMayor' :
      return usuario = usuario.sort( (a,b) => (b.email > a.email) ? 1 : -1 ); 
      default:
      return usuario;
  }

  }

}

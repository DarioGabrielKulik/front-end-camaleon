import { Pipe, PipeTransform } from '@angular/core';
import { Url } from '../interfaces/UrlInterfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(url: Url[], ordenarPor:string = 'sin valor'): Url[]{



    switch(ordenarPor){
        case'nombreMenor' :
        return url = url.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1 );
        case'nombreMayor' :
        return url = url.sort( (a,b) => (b.nombre > a.nombre) ? 1 : -1 ); 
        case'visitasMenor' :
        return url = url.sort( (a,b) => (a.visitas > b.visitas) ? 1 : -1 ); 
        case'visitasMayor' :
        return url = url.sort( (a,b) => (b.visitas > a.visitas) ? 1 : -1 ); 
        case'urlMenor' :
        return url = url.sort( (a,b) => (a.larga > b.larga) ? 1 : -1 ); 
        case'urlMayor' :
        return url = url.sort( (a,b) => (b.larga > a.larga) ? 1 : -1 ); 
        default:
        return url;
    }

  }

}

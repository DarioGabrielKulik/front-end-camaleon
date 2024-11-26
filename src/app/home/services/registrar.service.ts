import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/UsuarioInterfaces';

@Injectable({
  providedIn: 'root'
})
export class RegistroLoginService {

  constructor(private http:HttpClient) { }


  registro(usuario:any):Observable <Mensaje>{
    const url= 'https://camaleon.onrender.com/registrar'
    return this.http.post<Mensaje>(url, usuario);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../security/interfaces/UrlInterfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../interfaces/usuarioInterface';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  response!:Response; 
  constructor(private http:HttpClient) { }

  getLista():Observable<Usuario[]>{
    
    const token = localStorage.getItem('token');
    if(token){
    this.response = JSON.parse(token);
    }  
    const url= `https://camaleon.onrender.com/admin/lista`
    const credenciales = btoa(`${this.response.email}:${this.response.password}`);
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${credenciales}`); 
   

     const body = {  
        email:this.response.email,
        password:this.response.password          
     };

     return this.http.post<Usuario[]>(url, body, {headers});
  }

  deleteUrl(id:number):Observable<string>{
    const token = localStorage.getItem('token');
    if(token){
    this.response = JSON.parse(token);
    }  
    const url= `https://camaleon.onrender.com/admin/eliminar?id=${id}`

    const credenciales = btoa(`${this.response.email}:${this.response.password}`);
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${credenciales}`); 
   

     const body = {  
        email:this.response.email,
        password:this.response.password          
     };
    return this.http.post<string>(url, body, {headers});
  }
}

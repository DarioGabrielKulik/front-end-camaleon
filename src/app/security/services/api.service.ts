import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, Url, UrlResponse } from '../interfaces/UrlInterfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  response!:Response; 

  constructor(private http:HttpClient){}

  getLista():Observable<Url[]>{
    
    const token = localStorage.getItem('token');
    if(token){
    this.response = JSON.parse(token);
    }  
    const url= `http://localhost:8080/auth/lista?id=${this.response.id}`
    const credenciales = btoa(`${this.response.email}:${this.response.password}`);
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${credenciales}`); 
   

     const body = {  
        email:this.response.email,
        password:this.response.password          
     };

     return this.http.post<Url[]>(url, body, {headers});
  }

  postUrl(larga:string, nombre:string):Observable<UrlResponse>{
  
    const token = localStorage.getItem('token');
    if(token){
    this.response = JSON.parse(token);
    }  
    const url = `https://camaleon.onrender.com/auth/crear?nombre=${nombre}&larga=${larga}&id=${this.response.id}`;

    const credenciales = btoa(`${this.response.email}:${this.response.password}`);
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${credenciales}`); 
   

     const body = {  
        email:this.response.email,
        password:this.response.password          
     };


    return this.http.post<UrlResponse>(url, body, {headers});
  }

  deleteUrl(corta:string):Observable<string>{
    const token = localStorage.getItem('token');
    if(token){
    this.response = JSON.parse(token);
    }  
    const url= `https://camaleon.onrender.com/auth/eliminar?id=${this.response.id}&corta=${corta}`

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

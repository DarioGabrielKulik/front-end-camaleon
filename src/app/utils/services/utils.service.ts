import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http:HttpClient) { }

  getRecuperacion(email:string):Observable<any>{
    const url = `https://camaleon.onrender.com/recuperacion?email=${email}`;
    return this.http.post<any>(url, null);
  }

  getRecuperar(body:any):Observable<any>{
    const url = `https://camaleon.onrender.com/recuperar`;

    return this.http.post<any>(url, body);
  }
}

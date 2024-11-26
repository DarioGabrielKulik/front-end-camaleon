import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Login} from '../interfaces/UsuarioInterfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }

  login(email:string, password:string):Observable<Login>{
    const url='https://camaleon.onrender.com/login' 
      const body = {
        email:email,
        password:password
      }
      return this.http.post<Login>(url, body);
    
  }
}

import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = 'http://localhost:8080/...';

  constructor(private httpClient:HttpClient) { }

login(userName: any,passwordLogin: any) : Observable<Login[]>{
  return this.httpClient.get<Login[]>(`${this.baseURL}`);

}
}





import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
    providedIn: 'root'
  })

export class ApiService{

    baseUrl: string = environment.backend.host;

    constructor(private http: HttpClient){}

    requestLogin(email,password) {
        console.log(`${this.baseUrl}/login`)
        const loginData ={
            email,
            password,
        }

        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        });

        return this.http
        .post(`${this.baseUrl}/login`, loginData, { headers })
    }

    requestProfile(
        firstname,
        email,
        password,
        phone
    )
    {
        const ProfileData = {
            firstname,
            email,
            password,
            phone
        };

        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            
          });
        
          return this.http
      .put(`${this.baseUrl}/register`, ProfileData, { headers })
    }
}
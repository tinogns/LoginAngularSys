import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { userprofile } from '../models/userprofile';
import { datausers } from '../models/datausers';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    baseUrl: string = environment.backend.host;

    constructor(private http: HttpClient) { }

    requestLogin(email, password) {
        console.log(`${this.baseUrl}login`)
        const loginData = {
            email,
            password,
        }

        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        });

        return this.http
            .post(this.baseUrl + 'login/', loginData, { headers })
    }




    requestEditPassword(newPassword): Observable<any> {
      const newPasswordData = { password: newPassword };
  
      let headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        
      });
  
      return this.http
        .put<any>(`${this.baseUrl}users/password`, newPasswordData, { headers })
        
    }



    requestProfile( first_name, email, password, phone) {

        const ProfileData = {
            first_name,
            email,
            password,
            phone
        };

        console.log('Profile Data:', ProfileData)

        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',

        });

        return this.http.post(`${this.baseUrl}`, ProfileData, { headers });
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
    
      // Test Method
      
      getMethod(){
        return this.http.get(this.baseUrl);
      }
    
      // Test Method
      postMethod(users){
        return this.http.post(this.baseUrl, JSON.stringify(users), this.httpOptions);
      }
        
      
      // อ่านข้อมูล  (Method GET)
   getData(): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'users');
  }

  // อ่านข้อมูล  By ID (Method GET)
  getdata(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user/' + id );
  }

  // เพิ่มข้อมูล (Method POST)
  createdata(data): Observable<any> {
    
    return this.http.post<any>(this.baseUrl + '/' + JSON.stringify(data), this.httpOptions);
  }

  // แก้ไขข้อมุล  (Method PUT)
  updatedata(id, users): Observable<any> {
   
    return this.http.put<any>(this.baseUrl  + 'user/' , JSON.stringify(users), this.httpOptions) ;
  }

  // ลบรายการ  (Method DELETE)
  delete(id){
    
    return this.http.delete<any>(this.baseUrl + "user/" , id );
  }
    
}
import { Injectable } from '@angular/core';
import { ApiService } from '../controllers/api.service';
import { environment } from '../../environments/environment';
import { ErrorMsg } from '../views/shared/error-msg';
import { BehaviorSubject } from 'rxjs';
import { userprofile } from '../models/userprofile';
import { AlertifyService } from './alertify.service';
import { HttpClient } from '@angular/common/http';

let baseUrl = environment.backend.host;

@Injectable({
  providedIn: 'root'
})
export class UserSupport1Service {
  public user = new BehaviorSubject<userprofile>(null);
  private errorMsgArr = ErrorMsg;
  userprofile: any; 
  constructor(
    public _apiService: ApiService,
    public alertify: AlertifyService,
    private http: HttpClient
  ) { }

  onRequestLogin(email, password, callback) {
    this._apiService
        .requestLogin(email, password)
        .subscribe(
          (response) => {
            this.alertify.success('Login Sucsess')
            this.userprofile = localStorage.setItem('userProfile', JSON.stringify(response))

            callback(response);
          },
          (error) => {
            callback(error);
          }
        );
  }

  checkEmptyValue(...args) {
    let valueOfArgs = [];
    args.forEach((el) =>
      // If have value push true IF NOT push false
      el ? valueOfArgs.push(true) : valueOfArgs.push(false)
    );
    /**
     * False = NOT have value
     * True = HAVE value
     */
    return valueOfArgs.includes(false) ? false : true;
  }


  onRequestProfile(firstname, email, password, phone, callback) {
   
      // Call API service
      this._apiService
        .requestProfile( firstname, email, password, phone)
        .subscribe(
          (response) => {
            callback(response);
          },
          (error) => {
            console.log(error)
            callback(error);
            
          }
        );
  
  }

  handleDisplayError(errorResponse) {

    console.log(errorResponse)
    let displayErrorMsg: string;

    

    return displayErrorMsg;
  }

  addUser(user: userprofile) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  //edit user 
  getAll() {
    return this.http.get<userprofile[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<userprofile>(`${baseUrl}/${id}`);
  }

  create(params) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}

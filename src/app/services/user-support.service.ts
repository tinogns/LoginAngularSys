import { Injectable } from '@angular/core';
import { ApiService } from '../controllers/api.service';
import { environment } from '../../environments/environment';
import { ErrorMsg } from '../views/shared/error-msg';
import { BehaviorSubject } from 'rxjs';
import { userprofile } from '../models/userprofile';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';



@Injectable({
  providedIn: 'root'
})
export class UserSupport1Service {
  public user = new BehaviorSubject<userprofile>(null);
  private errorMsgArr = ErrorMsg;
  userprofile: any; 
  constructor(
    public _apiService: ApiService,
    private http: HttpClient
  ) { }

  onRequestLogin(email, password, callback) {
    this._apiService
        .requestLogin(email, password)
        .subscribe(
          (response) => {
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

  onRequestEditPassword(newPassword, callback) {
   
      // Encrypt password
      const publicKey = environment.backend.host;
      const encryptPassword = CryptoJS.AES.encrypt(
        newPassword,
        publicKey
      ).toString();

      // Call API service
      this._apiService.requestEditPassword(encryptPassword).subscribe(
        (response) => {
          callback(response);
        },
        (error) => {
          callback(error);
        }
      );
    
  }

  handleDisplayError(errorResponse) {

    console.log(errorResponse)
    let displayErrorMsg: string;

    

    return displayErrorMsg;
  }


  
}

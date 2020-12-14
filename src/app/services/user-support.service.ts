import { Injectable } from '@angular/core';
import { ApiService } from '../controllers/api.service';
import { environment } from '../../environments/environment';
import { ErrorMsg } from '../views/shared/error-msg';
@Injectable({
  providedIn: 'root'
})
export class UserSupport1Service {
  
  private errorMsgArr = ErrorMsg;

  constructor(
    public _apiService: ApiService,
  ) { }

  onRequestLogin(email, password, callback) {
    this._apiService
        .requestLogin(email, password)
        .subscribe(
          (response) => {
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


}

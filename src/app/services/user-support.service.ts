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
            callback(error);
          }
        );
  
  }

  handleDisplayError(errorResponse) {
    let displayErrorMsg: string;

    if (errorResponse.hasOwnProperty('error')) {
      this.errorMsgArr.some((el) => {
        if (el.code !== errorResponse.error.code) {
          displayErrorMsg = 'Server Error, please try again later';
          return;
        }
      });

      // Error from API
      this.errorMsgArr.forEach((el) => {
        if (errorResponse.error.code === el.code) {
          displayErrorMsg = el.message;
          return;
        }
      });
    } else {
      // Time out
      displayErrorMsg =
        'Looks like the server is taking to long to respond. Please try again later';
    }

    return displayErrorMsg;
  }


}

import { Injectable } from '@angular/core';
import { ApiService } from '../controllers/api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSupport1Service {
  

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
}

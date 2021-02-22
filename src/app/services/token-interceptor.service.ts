import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpParams } from '@angular/common/http';
import { UserSupport1Service } from './user-support.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private _userSupportService: UserSupport1Service,
   
  ) { }

  intercept(req, next){
    
    let baseUrl = environment.backend.host;

    // Login
    if (req.method === 'POST' && req.url === `${baseUrl}/login`) {
      return next
        .handle(req);
        
    }
   
    
  }
}

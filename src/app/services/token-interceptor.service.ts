import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpParams } from '@angular/common/http';
import { UserSupport1Service } from './user-support.service';
import { environment } from '../../environments/environment';
import { LoaderService } from './loader.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private _userSupportService: UserSupport1Service,
    public _loaderService: LoaderService,
  ) { }

  intercept(req, next){
    this._loaderService.isLoading.next(true);
    let baseUrl = environment.backend.host;

    // Login
    if (req.method === 'POST' && req.url === `${baseUrl}/login`) {
      return next
        .handle(req);
        
    }
   
    
  }
}

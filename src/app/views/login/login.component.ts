import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSupport1Service } from '../../services/user-support.service';
import { AlertifyService } from '../../services/alertify.service';
import {AuthService} from '../../services/auth.service'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm : FormGroup;
  userName: any = {};
  email:string;
  password:string;
  

  constructor(
    private _userSupportService: UserSupport1Service,
    private router: Router,
    private http: HttpClient,
    private alertify: AlertifyService,
    private authService: AuthService
  ) { }

  ngOnInit() {
   
  }

  onLogin(){
   
   if (!this._userSupportService.checkEmptyValue(this.email, this.password)) return;

    this._userSupportService.onRequestLogin(this.email, this.password, response => {
      
      
 
      if(response.success === 0){
        console.log("login fail");
        this.alertify.error('User id or password is wrong')
        return
      }

      this.router.navigate(['/home']);
    });

  }

}


 
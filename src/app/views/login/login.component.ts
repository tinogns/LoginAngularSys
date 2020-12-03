import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSupport1Service } from '../../services/user-support.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm : FormGroup;
  email:string;
  password:string;

  constructor(
    private _userSupportService: UserSupport1Service,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
   
  }

  onLogin(){
    
    // this.loginForm = new FormGroup({
    //   email : new FormControl('',[Validators.required,Validators.email]),
    //   password : new FormControl('',[Validators.required,Validators.minLength(6)])
    // });

    this._userSupportService.onRequestLogin(this.email, this.password, (response) => {
      console.log(response);

        return;
      });

    
  }

}

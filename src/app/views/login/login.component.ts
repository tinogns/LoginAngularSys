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
    if (!this._userSupportService.checkEmptyValue(this.email, this.password)) return;

    this._userSupportService.onRequestLogin(this.email, this.password, response => {
      
      console.log(response.success)
      if(response.success === 0){
        console.log("login fail");
        return
      }

      this.router.navigate(['/home']);
    });

  }

}

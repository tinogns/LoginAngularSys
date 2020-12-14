import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSupport1Service } from 'src/app/services/user-support.service';
import { Router } from '@angular/router';
import {MustMatch} from '../shared/MustMatch'


@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {

  showAlertBox: boolean = false;
  alertMessage: string = '';
  form: FormGroup;
  submitted = false;

  constructor(
    private http: HttpClient,
    private _userSupportService: UserSupport1Service,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

 

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required]
    },{
      validators: MustMatch('password','confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }


// Register
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) return;

    let frist_name = this.form.value.firstName;
    let email = this.form.value.email;
    let password = this.form.value.password;
    let phone = this.form.value.phone;

  
    this._userSupportService.onRequestProfile(
      frist_name,
      email,
      password,
      phone,

      

      response => {
       console.log(response.success)
       if(!response.success){
          this.showAlertBox = true;
          this.alertMessage = this._userSupportService.handleDisplayError(
            response
          );
          return;
       }
       this.router.navigate(['/login']);
      }
    )
  }

  
















 

  // saveForm() {

  //   let url = 'http://localhost:3000/api/users';

  //   if (!this._userSupportService.checkEmptyValue(this.firstname, this.email,this.password, this.phone)) return;
    
  //   const registerData = {

  //     first_name: this.postdata.first_name,
  //     email: this.postdata.email,
  //     password: this.postdata.password,
  //     phone: this.postdata.tel
  //   }

  //   console.log(registerData);

  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json; charset=utf-8'
  //   });

  //   let callback: Observable<any> = this.http.post(url, registerData, { headers });
  //   callback.subscribe(res => {
  //     console.log(res)
  //   }, error => console.log(error)) // subscribe ต้องมีการตอบกลับ 2 อัน คือ res error

    

  }



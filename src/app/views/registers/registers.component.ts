import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {


  postdata: any = {};

  constructor(private formBuidler: FormBuilder
    , private http: HttpClient
  ) {

  }

  // profileForm = this.formBuidler.group({
  //   firstName:[''],
  //   lastName:[''],
  //   address:[''],
  //   dob:[''],
  //   gender:['']
  // });

  ngOnInit(): void {
  }

  saveForm() {

    let url = 'http://localhost:3000/api/users';

    // let postdataset = new FormData();
    // postdataset.append('id', '0');
    // postdataset.append('name', this.postdata.name);
    // postdataset.append('email', this.postdata.email);
    // postdataset.append('password', this.postdata.password);
    // postdataset.append('phone', this.postdata.phone);

    

    const registerData = {
      
      first_name: this.postdata.first_name,
      email: this.postdata.email,
      password: this.postdata.password,
      phone: this.postdata.tel
    }

    console.log(registerData);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    let callback: Observable<any> = this.http.post(url, registerData, { headers });
    callback.subscribe(res => { 
      console.log(res)
    }, error => console.log(error)) // subscribe ต้องมีการตอบกลับ 2 อัน คือ res error

    // this.http.post('http://localhost:3010/users', FormData)
    // .subscribe(res=>{
    //   console.log(res)
    // })


  }

}

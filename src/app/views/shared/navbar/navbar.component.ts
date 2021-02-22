import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { from } from 'rxjs';
import {UserSupport1Service} from '../../../services/user-support.service'
import {userprofile} from '../../../models/userprofile'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogin:boolean = false;
  loggedinUser: string;
  userprofile: any;
  constructor(
    private _userSupportService: UserSupport1Service,
   
  ) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('userProfile'))){
      this.userprofile =JSON.parse(localStorage.getItem('userProfile'))

    if(this.userprofile.success === 1 ){
      this.islogin = true;
    }
  }

  
  }
 

}

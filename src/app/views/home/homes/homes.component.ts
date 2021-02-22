import { Component, OnInit  } from '@angular/core';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  loggedinUser: string;
  userprofile: any;
  checklogin:boolean = false;
  firstname: string;

  constructor(
    
  ) { }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('userProfile'))){
      this.userprofile =JSON.parse(localStorage.getItem('userProfile'))
     

      if(this.userprofile.success === 1 ){
        this.checklogin = true;
        this.firstname = this.userprofile.firstName
      }
    }
    
    
  }

  

}

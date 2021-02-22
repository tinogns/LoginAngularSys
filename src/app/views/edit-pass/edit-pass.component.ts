import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSupport1Service } from '../../services/user-support.service';
@Component({
  selector: 'app-edit-pass',
  templateUrl: './edit-pass.component.html',
  styleUrls: ['./edit-pass.component.css']
})
export class EditPassComponent implements OnInit {
  showAlertBox: boolean = false;
  alertMessage: string = '';
  showLoading: boolean = false;
  newPassword: string;
  confirmPassword: string;

  constructor(
    private _userSupportService: UserSupport1Service,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }


  onEditUserPasswordSubmit() {
    if (!this._userSupportService.checkEmptyValue(this.newPassword, this.confirmPassword)) return;
    
    this.showLoading = true;
    this.showAlertBox = false;

    // compare newPassword and confirmPassword
    if (this.newPassword !== this.confirmPassword) {
      this.showLoading = false;
      this.showAlertBox = true;
      this.alertMessage = 'The password confirmation does not match';
      return;
    }

    this._userSupportService.onRequestEditPassword(
      this.newPassword,
      (response) => {
        // Display error
        if (!response.success) {
          this.showLoading = false;
          this.showAlertBox = true;

          this.alertMessage = this._userSupportService.handleDisplayError(response);

          return;
        }

       
      }
    );
  }
 }
 


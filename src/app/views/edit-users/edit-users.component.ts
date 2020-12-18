import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
// import { UserService, AlertService } from '@app/_services';
import { UserSupport1Service } from '../../services/user-support.service';

import { MustMatch } from '../shared/MustMatch';
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  fistName: string;
  email: string;
  phone: string;





  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserSupport1Service,
    // private userService: UserService,
    // private alertService: AlertService
  ) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('userProfile'))) { // check empty

      const userprofile = JSON.parse(localStorage.getItem('userProfile'));
      console.log(userprofile);

      this.fistName = userprofile.firstName;
      this.email = userprofile.email;
      this.phone = userprofile.phone;

    }
  }

  editprofile(){

    console.log(this.fistName)

  }

  // editprofile() {
  //   this.id = this.route.snapshot.params['id'];
  //   this.isAddMode = !this.id;

  //   // password not required in edit mode
  //   const passwordValidators = [Validators.minLength(6)];
  //   if (this.isAddMode) {
  //     passwordValidators.push(Validators.required);
  //   }

  //   this.form = this.formBuilder.group({
  //     title: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     role: ['', Validators.required],
  //     password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
  //     confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
  //   }, {
  //     validator: MustMatch('password', 'confirmPassword')
  //   });

  //   if (!this.isAddMode) {
  //     this.userService.getById(this.id)
  //       .pipe(first())
  //       .subscribe(x => this.form.patchValue(x));
  //   }

  // }


  // onSubmit() {
  //   this.submitted = true;



  //   // stop here if form is invalid
  //   if (this.form.invalid) {
  //     return;
  //   }

  //   this.loading = true;
  //   if (this.isAddMode) {
  //     this.createUser();
  //   } else {
  //     this.updateUser();
  //   }
  // }

  // private createUser() {
  //   this.userService.create(this.form.value)
  //     .pipe(first())
  //     .subscribe({
  //       next: () => {

  //         this.router.navigate(['../'], { relativeTo: this.route });
  //       },
  //       error: error => {

  //         this.loading = false;
  //       }
  //     });
  // }

  // private updateUser() {
  //   this.userService.update(this.id, this.form.value)
  //     .pipe(first())
  //     .subscribe({
  //       next: () => {

  //         this.router.navigate(['../../'], { relativeTo: this.route });
  //       },
  //       error: error => {

  //         this.loading = false;
  //       }
  //     });
  // }
}

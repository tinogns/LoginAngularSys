import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule , HttpInterceptor} from '@angular/common/http';// call api
import {ApiService} from './controllers/api.service'
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
// Page
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegistersComponent } from './views/registers/registers.component';
import { HomesComponent } from './views/home/homes/homes.component';
import {UserSupport1Service} from './services/user-support.service'
import {EditUsersComponent} from './views/edit-users/edit-users.component'


// Materail
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule, MatDateSelectionModel} from '@angular/material/datepicker'
import { from } from 'rxjs';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './views/shared/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistersComponent,
    HomesComponent,
    NavbarComponent,
    EditUsersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatFormFieldModule,
    HttpClientModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule,
    
    
  ],
  providers: [
  UserSupport1Service,
  ApiService,
  AlertifyService,
  AuthService
  
],

  bootstrap: [AppComponent]
})
export class AppModule { }

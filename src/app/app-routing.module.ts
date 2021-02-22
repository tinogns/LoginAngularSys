import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegistersComponent } from './views/registers/registers.component';
import { HomesComponent } from './views/home/homes/homes.component';
import {ListComponent} from './views/edit-users/list.component';
import { EditPassComponent } from './views/edit-pass/edit-pass.component';
const routes: Routes = [
  // {
  //   path : '',
  //   component : AppComponent,
  //   children : [
  //     {
  //       path: '',
  //       component : LoginComponent
  //     }
  //   ]
  // }

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomesComponent},
  {path: 'registers', component: RegistersComponent},
  {path: 'list', component: ListComponent},
  {path: 'list/:id' , component: ListComponent},
  {path: 'editpass', component: EditPassComponent}

  // {path: 'member/:email', component: RegistersComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

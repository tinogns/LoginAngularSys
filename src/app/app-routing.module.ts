import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegistersComponent } from './views/registers/registers.component';
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
  {path: 'registers', component: RegistersComponent}
  // {path: 'member/:email', component: RegistersComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

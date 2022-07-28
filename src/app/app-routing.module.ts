import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path:'',redirectTo:'log-in',pathMatch:'full'
  },
  {
    path:'log-in',component:LogInComponent
  },
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'homepage',component:HomepageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

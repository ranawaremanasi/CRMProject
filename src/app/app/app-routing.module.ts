import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateleadComponent } from './updatelead/updatelead.component';
import { LoginComponent } from './login/login.component';
import { GetleaddataComponent } from './getleaddata/getleaddata.component';
// import { GetleadidComponent } from './getleadid/getleadid.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { AddleadComponent } from './addlead/addlead.component';
import {AdminleadComponent} from './adminlead/adminlead.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'add',
    component: AddleadComponent
  },
  {
    path:'edit/:id',
    component:UpdateleadComponent
  },
  {
    path: 'getdata',
    component: GetleaddataComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create',
    component: CreateuserComponent
  },
  {
    path: 'adminlead',
    component: AdminleadComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

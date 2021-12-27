import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GetleaddataComponent } from './getleaddata/getleaddata.component';
import { AddleadComponent } from './addlead/addlead.component';
import { UpdateleadComponent } from './updatelead/updatelead.component';
import { FormsModule } from '@angular/forms';
import { GetleadidComponent } from './getleadid/getleadid.component';
import { CreateuserComponent } from './createuser/createuser.component';
import {LeadserviceService} from './leadservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminleadComponent } from './adminlead/adminlead.component';
import { SearchPipe } from './search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetleaddataComponent,
    AddleadComponent,
    UpdateleadComponent,
    GetleadidComponent,
    CreateuserComponent,
    AdminComponent,
    AdminleadComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [LeadserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

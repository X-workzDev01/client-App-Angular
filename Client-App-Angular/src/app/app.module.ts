import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTicketComponent } from './createTicket/CreateTicketComponent';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewGadgetsComponent } from './view-gadgets/view-gadgets.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateTicketComponent,
    ProfileComponent,
    LogoutComponent,
    ViewGadgetsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

import { AuthGuard, AuthService } from './_common/index';

import { AlertComponent, AlertService } from './_shared/index';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    AlertComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AlertService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

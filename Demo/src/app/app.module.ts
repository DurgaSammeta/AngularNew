import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RegComponent } from './main/main.component';
import { RegService } from './service/app.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
@NgModule({
  declarations: [
    RegComponent, LoginComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, 
    FormsModule,    ReactiveFormsModule,
     RouterModule.forRoot([{path:"login_page", component:LoginComponent}])
  ],
  providers: [RegService],
  bootstrap: [RegComponent]
})
export class AppModule { }

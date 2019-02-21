import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RegComponent } from './main/main.component';
//import { RegService } from './service/app.service';
import { RegService} from "./sample.service";
import {HttpClientModule} from "@angular/common/http";
import { HttpModule } from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
@NgModule({
  declarations: [
    RegComponent, LoginComponent, FirstComponent, SecondComponent
      ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule, HttpClientModule, 
    FormsModule,    ReactiveFormsModule,
     RouterModule.forRoot([{path:"login_page", component:LoginComponent}])
  ],
  providers: [RegService],
  bootstrap: [RegComponent]
})
export class AppModule { }

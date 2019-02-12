import { Component } from '@angular/core';
import {RegService} from "../Service/app.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormGroup, FormControlName, FormControl} from "@angular/forms";
import{Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  
})
export class RegComponent {
  private myForm:FormGroup;
 private result:any;
 constructor(private _service:RegService,
              private _router:Router){this.myForm= new FormGroup({
   uname:new FormControl(),
   ucity:new FormControl(),
   upwd:new FormControl(),
   gender:new FormControl(),
   ustate:new FormControl(),
   unum:new FormControl()
 })
}
 ngOnInit(){
   this._service.getData().subscribe(res=>{
     this.result=res;
   },(err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
       console.log("Client Side Error");
     }else{
       console.log("server side error");
     }
   });
  }
  public Register(){
   window.localStorage.setItem("name", this.myForm['uname']);
   window.localStorage.setItem("password", this.myForm['upwd']);
   this._router.navigate(["/login_page"]);
  }
}
   
 



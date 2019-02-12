import {Component} from "@angular/core";
import {FormGroup, FormControlName, FormControl} from "@angular/forms";
@Component({
    templateUrl:"./login.component.html"
    })
    export class LoginComponent{
        private myForm1:FormGroup;
        constructor(){
            this.myForm1=new FormGroup({
                uname1:new FormControl(),
                upwd1:new FormControl()
            })
        }
        public Register()
        {
            var obj1=window.localStorage.getItem("name");
            var obj2=window.localStorage.getItem("password");
            if(obj1==this.myForm1['uname1'] && obj2==this.myForm1['upwd1'])
            {
                alert("Login Succesful");
            }
            else{
                alert("Invalid Credentials");
            }

        }
    }
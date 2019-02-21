import{Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable({
    providedIn: 'root'
  })
export class AppService{
constructor(private _http:HttpClient){

};
public getData():any{

    return this._http.get("../assets/sample.json");
    
}

}
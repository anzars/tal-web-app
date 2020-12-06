import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { userService } from './Userservice';

@Injectable()
export class ControlService {
constructor(private http: HttpClient ,private userservice: userService ) {

}
getOccupations() {
     return this.http.get('/Occupation', {responseType: 'json'});
   }
getRating(Occupation: string ){
   return this.http.get('/rating',{
      params: new HttpParams().set('occupation', Occupation),
      responseType: 'json',
       } ).pipe(map( (data:any) =>{
         
           let user = this.userservice.getUser();
           let premium = (user.sum*data[0].Factor*user.age)/1000*12;
           console.log('premium='+premium );
           return premium;
       }));
}  

}
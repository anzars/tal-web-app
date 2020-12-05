import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ControlService {
constructor(private http: HttpClient) {
}
getOccupations() {
     return this.http.get('http://localhost:5000/api/v1/ratings/Occupation', {responseType: 'json'});
   }  
}
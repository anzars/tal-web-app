import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { userdetails } from 'src/Models/userdetails';

export class userService{
private user: userdetails;
userSubject = new Subject<userdetails>();
constructor(){}

setUser(newUser: userdetails){
    this.user = newUser;
    this.userSubject.next(this.user);
    
} 
getUser(){
    return this.user;
}
}
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { userdetails } from 'src/Models/userdetails';
import { ControlService } from 'src/service/control-service';
import { userService } from 'src/service/Userservice';
import { ReviewComponent } from '../review/review.component';



@Component({
  selector: 'app-premiumform',
  templateUrl: './premiumform.component.html',
  styleUrls: ['./premiumform.component.css'],
 
})
export class PremiumformComponent implements OnInit {
   myform: FormGroup;
   occupationSubscription: Subscription;
   occupationList: Array<any>;
   review: boolean = true;
   apiError:boolean = false;
   subjectError= new Subject<any>();
   subscriptionError: Subscription;
   closeSubscription: Subscription;
   today: string;


   
  constructor(private service: ControlService, 
              private userservice:userService,
              private router: Router,
              private activatedroute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.setMaxDate();
    
   this.myform = new FormGroup({
       'name': new FormControl(null,[Validators.required]),
        'dob': new FormControl(null, [Validators.required]),
        'age': new FormControl(null, [Validators.required]),
        'occupation': new FormControl(null , [Validators.required]),
        'sum': new FormControl(null,[Validators.required])

   });
      this.subscriptionError = this.subjectError.subscribe((error) => {
       this.apiError = true;
     });

     this.service.getOccupations().subscribe(( response:[] ) => {
      //console.log( response );
      this.occupationList = response;

     },
     (error)=>{
       console.log('error');
       this.subjectError.next(error);
     }
     );

  }
  calculateDob(){
   if( this.Validatedate() === true){

    let selectedDate= new Date(this.myform.get('dob').value); 
    let timeDiff = Math.abs(Date.now() - selectedDate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
     this.myform.patchValue({'age': age});
   }
  }
  Validatedate(): boolean{
    let tooday = this.myform.get('dob').value;
    
    let yyyy = tooday.split('-')[0];
    console.log(parseFloat(yyyy)>2020);
    console.log(yyyy);
    if(parseFloat(yyyy)>2020 || parseFloat(yyyy)<1950){
      return false;
    }
      else
      {
        return true;
      }
    
  }
  setMaxDate(){
    let tooday = new Date();
    let dd: any = tooday.getDate();
    let mm: any = tooday.getMonth()+1; //January is 0!
    let yyyy = tooday.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

this.today = yyyy+'-'+mm+'-'+dd;

  }

  onCalculate(){
    if(this.myform.valid){
     
      
       this.userservice.setUser(this.myform.value);
      this.service.getRating(this.myform.get('occupation').value).subscribe((response) =>{
      this.router.navigate(['../result', response ], { relativeTo:  this.activatedroute  });
      },
      (error)=>{
        console.log('error');
        this.subjectError.next(error);
      }
      );
      
    }
   
    
  }
 
  
  ngOnDestroy(){
    this.subscriptionError.unsubscribe();
   
  }
  onCloseError(){
    this.apiError = false;
  }

}

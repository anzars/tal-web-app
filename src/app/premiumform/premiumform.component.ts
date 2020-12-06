import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { userdetails } from 'src/Models/userdetails';
import { ControlService } from 'src/service/control-service';
import { userService } from 'src/service/Userservice';


@Component({
  selector: 'app-premiumform',
  templateUrl: './premiumform.component.html',
  styleUrls: ['./premiumform.component.css']
})
export class PremiumformComponent implements OnInit {
   myform: FormGroup;
   occupationSubscription: Subscription;
   occupationList: Array<any>;
   
  constructor(private service: ControlService,
              private userservice:userService,
              private router: Router,
              private activatedroute: ActivatedRoute ) { }

  ngOnInit(): void {
   this.myform = new FormGroup({
       'name': new FormControl(null,[Validators.required]),
        'dob': new FormControl(null, [Validators.required]),
        'age': new FormControl(0, [Validators.required]),
        'occupation': new FormControl(null , [Validators.required]),
        'sum': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])

   });
     this.service.getOccupations().subscribe(( response:[] ) => {
      console.log( response );
      this.occupationList = response;

     });

  }
  calculateDob(){
    let selectedDate= new Date(this.myform.get('dob').value); 
    let timeDiff = Math.abs(Date.now() - selectedDate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
     this.myform.patchValue({'age': age});
  }

  onCalculate(){
    if(this.myform.valid){
     
      
       this.userservice.setUser(this.myform.value);
      this.service.getRating(this.myform.get('occupation').value).subscribe((response) =>{
      this.router.navigate(['../result', response ], { relativeTo:  this.activatedroute  });
        
      })
      
    }
   
    
  }
  onChange(){
    
  }

}

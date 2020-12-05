import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ControlService } from 'src/service/control-service';


@Component({
  selector: 'app-premiumform',
  templateUrl: './premiumform.component.html',
  styleUrls: ['./premiumform.component.css']
})
export class PremiumformComponent implements OnInit {
   myform: FormGroup;
   occupationSubscription: Subscription;
   occupationList: Array<any>;
   
  constructor(private service: ControlService) { }

  ngOnInit(): void {
   this.myform = new FormGroup({
       'name': new FormControl(null,[Validators.required]),
        'dob': new FormControl(null, [Validators.required]),
        'age': new FormControl('0', [Validators.required]),
        'occupation': new FormControl(null , [Validators.required]),
        'sum': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])

   });
     this.service.getOccupations().subscribe(( response:[] ) => {
      console.log( response );
      this.occupationList = response;

     });

  }
  onCalculate(){
    if(this.myform.valid){
      console.log(this.myform.value);
    }
   
    
  }
  onChange(){
    
  }

}

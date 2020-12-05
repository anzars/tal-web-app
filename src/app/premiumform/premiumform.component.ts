import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-premiumform',
  templateUrl: './premiumform.component.html',
  styleUrls: ['./premiumform.component.css']
})
export class PremiumformComponent implements OnInit {
   myform: FormGroup;
  constructor() { }

  ngOnInit(): void {
   this.myform = new FormGroup({
       'name': new FormControl('Enter full name' ,[Validators.required]),
        'dob': new FormControl(null, [Validators.required]),
        'age': new FormControl('0', [Validators.required]),
        'occupation': new FormControl(null , [Validators.required]),
        'sum': new FormControl(null,[Validators.required])

   });

  }
  onCalculate(){
    console.log(this.myform.value)
  }

}

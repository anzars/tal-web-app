import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.css']
})
export class ResultformComponent implements OnInit {
  
  @ViewChild('inp') child: HTMLElement;
  constructor(private activatedroute: ActivatedRoute,private router: Router, private currencyPipe: CurrencyPipe) { }
  premium: any;
  ngOnInit(): void {
   this.activatedroute.params.subscribe((params) =>{
    this.premium = params['factor']; 
    
    this.premium = this.currencyPipe.transform(this.premium, 'AUD');
    console.log(params);
   } )
  }
  


  onBack(){
    console.log(this.activatedroute);
    this.router.navigate(['../../premium'] , { relativeTo: this.activatedroute });
  }

}

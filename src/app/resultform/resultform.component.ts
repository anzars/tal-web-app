import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.css']
})
export class ResultformComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,private router: Router) { }
  premium: number;
  ngOnInit(): void {
   this.activatedroute.params.subscribe((params) =>{
    this.premium = params['factor']; 
    console.log(params);
   } )
  }
  onBack(){
    console.log(this.activatedroute);
    this.router.navigate(['../../premium'] , { relativeTo: this.activatedroute });
  }

}

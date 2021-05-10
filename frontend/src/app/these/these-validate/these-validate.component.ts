import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TheseService } from 'src/app/these.service';
import { These } from 'src/models/These';

@Component({
  selector: 'app-these-validate',
  templateUrl: './these-validate.component.html',
  styleUrls: ['./these-validate.component.scss']
})
export class TheseValidateComponent implements OnInit {
  theseDetails: These;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  username!: string;
  name!: string;
  token = "";
  
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });}
  constructor(private _theseService: TheseService , private observer: BreakpointObserver , private router : Router){
    if(_theseService.getThese() != null){
      localStorage.setItem("these",JSON.stringify(_theseService.getThese())); 
    }
    this.theseDetails = JSON.parse(localStorage.getItem("these") || '{}'); 
   }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username') as string
    this.name = sessionStorage.getItem('first_name') as string
    console.log();
    
  }
  onValidate(){
    this.token =  sessionStorage.getItem('token') as string
    let these = {'url' : this.theseDetails.url,'title' : this.theseDetails.title , 'validated' : true , 'encadreur' :this.theseDetails.encadreur , 'year' : this.theseDetails.year , 'emailPromoteur' : this.theseDetails.emailPromoteur}
    this._theseService.updateThese(these , this.token).subscribe(
      data => {
        console.log(data);  

      },
      error => {
        console.log(error); 
      }
    )
    this.router.navigate(['theses']);
    
  }
  onCancel(){
    this.token =  sessionStorage.getItem('token') as string
    let these = {'url' :  this.theseDetails.url,'title' : this.theseDetails.title , 'validated' : true , 'encadreur' :this.name , 'year' : this.theseDetails.year ,'description' : this.theseDetails.description,  'objectif' : this.theseDetails.objectif,  'results' : this.theseDetails.results}
    this._theseService.deleteThese(these , this.token).subscribe(
      data => {
        console.log(data);  
        
      },
      error => {
        console.log(error); 
      }
    )
    this.router.navigate(['theses']);

  }

}

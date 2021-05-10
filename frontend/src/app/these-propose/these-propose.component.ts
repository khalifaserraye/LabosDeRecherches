import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TheseService } from '../these.service';

@Component({
  selector: 'app-these-propose',
  templateUrl: './these-propose.component.html',
  styleUrls: ['./these-propose.component.scss']
})
export class TheseProposeComponent implements OnInit {
  

  title!: string;
  description!: string;
  year1!: string;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  username!: string;
  name!: string;
  promo! : string;
  resume!: string;
  objectif!: string;
  result! : string;
  role! : string;
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
    });

    this.role = sessionStorage.getItem('user_type') as string}
  
  data! : any;
  constructor(private _theseService: TheseService , private observer: BreakpointObserver, private router : Router){
   }
   
  ngOnInit(): void { 
    this._theseService.getChercheurData(this.token).subscribe(
      data => console.log(data)
          
    )
    this.username = sessionStorage.getItem('username') as string
    this.name = sessionStorage.getItem('first_name') as string 
  }
  
  onKeyTitle(event : any) {
    this.title = event.target.value;
  }
  onKeyYear1(event : any) {
    this.year1 = event.target.value;
  }
  onKeyPromo(event : any) {
    this.promo = event.target.value;
  }
  onKeyResume(event : any) {
    this.resume = event.target.value;
  }
  onKeyObjectif(event : any) {
    this.objectif = event.target.value;
  }
  onKeyResultat(event : any) {
    this.result = event.target.value;
  }
  onSubmit(){

    let these = {'title' : this.title , 'validated' : false , 'encadreur' :this.name , 'year' : this.year1 ,"emailPromoteur": this.promo
    ,'description' : this.resume,  'objectif' : this.objectif,  'results' : this.result}
    this.token =  sessionStorage.getItem('token') as string
    
    this._theseService.createThese(these , this.token).subscribe(
      data =>{
        console.log(data);
        
      },
      error => {
        console.log(error);
        
      }
    )
    this.router.navigate(['/theses'])
    
  }
}

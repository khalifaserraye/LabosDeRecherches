import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { These } from 'src/models/These';
import { TheseService } from '../these.service';

@Component({
  selector: 'app-these-details',
  templateUrl: './these-details.component.html',
  styleUrls: ['./these-details.component.scss']
})
export class TheseDetailsComponent implements OnInit {
  theseDetails: These;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  username!: string;
  name!: string;
  role! : string;
  
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
  constructor(private _theseService: TheseService , private observer: BreakpointObserver){
    if(_theseService.getThese() != null){
      localStorage.setItem("these",JSON.stringify(_theseService.getThese())); 
    }
    this.theseDetails = JSON.parse(localStorage.getItem("these") || '{}'); 
      

      
    
   }
   
  ngOnInit(): void {
 
    console.log(this.theseDetails)
    this.username = sessionStorage.getItem('username') as string
    this.name = sessionStorage.getItem('first_name') as string
    

    
  }

}

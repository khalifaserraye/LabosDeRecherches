import { Component, OnInit, ViewChild } from '@angular/core';
import { These } from 'src/models/These';
import { MatTableDataSource } from '@angular/material/table'; 
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TheseService } from '../these.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-these',
  templateUrl: './these.component.html',
  styleUrls: ['./these.component.scss']
})


export class TheseComponent implements OnInit {
  
  username!: string;
  name!: string;
  role!: string;
  dataSource : MatTableDataSource<These>;
  theses: These[] ;
  token!: string;
  columns : String[] = ['title' , 'encadreur' , 'validated', "year" ];
  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }
  @ViewChild(MatPaginator , {static: false})
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  } 
  @ViewChild(MatSidenav , {static: false})
  sidenav!: MatSidenav;

  
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
  constructor(private _theseService: TheseService , private observer: BreakpointObserver , private router : Router){
  
    this.theses = []
    this.dataSource = new  MatTableDataSource(this.theses);
  }
  
  public setThese(item : These){
    let currentItem:These = {
    url : item.url,
    title:item.title,
    encadreur:item.encadreur,
    validated:item.validated , 
    year :item.year,
    emailPromoteur : item.emailPromoteur,
    description: item.description,
    objectif : item.objectif,
    results : item.results};

   this._theseService.setThese(currentItem);
    this.role = sessionStorage.getItem('user_type') as string

    console.log(this.role);
    
   switch (this.role) {
    case '1':
      this.router.navigate(['theses/details']); 
    break;
    case '2':
      this.router.navigate(['theses/details']); 
    break;
    case '3':
      this.router.navigate(['theses/validation']); 
    break;
    default:
    break;
   }
   
  }


  public setDataSource(theses : any){
    this.dataSource = new  MatTableDataSource(theses);
  }


  ngOnInit(): void {  
    this.showConfig()     
    this.username = sessionStorage.getItem('username') as string
    this.name = sessionStorage.getItem('first_name') as string
  }
  showConfig = () => {
    this.token =  sessionStorage.getItem('token') as string
    let theses: These[] ;
    this._theseService.getConfig(this.token)
      .subscribe( 
      data => {
        
      theses = data
      
      this.setDataSource(theses)
      console.log(data);   
      
      },
      error => console.log(error)
      
      /*this.data = {
           heroesUrl: data.heroesUrl,
          textfile:  data.textfile,
          date: data.date,
      }*/
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  token = "";
  constructor(private loginService : LoginService , private router : Router ) { }

  ngOnInit(): void {
  }
  /*
  */
  onKeyUser(event : any){
    this.username = event.target.value;
  }
  onKeyPass(event : any){
    this.password = event.target.value;
  }
  onSubmit(){
    this.validateLogin(this.username , this.password)
    console.log(this.token);
    
    this.getUserData(this.username , this.token)
       
  }
  private validateLogin(username:string , password : string){
    this.loginService.getToken(username , password)
      .subscribe( 
      data => {
        this.token  = data.token
      sessionStorage.setItem('token' , data.token)
      sessionStorage.setItem('username' , username)
      
      
      console.log(data.token);
      
      //this.router.navigate(['/theses']);
      //console.log(data);   
      
      },
      error => console.log(error)
      
      /*this.data = {
           heroesUrl: data.heroesUrl,
          textfile:  data.textfile,
          date: data.date,
      }*/
      );
  }
  private getUserData(username : string , token : string){
    
    this.loginService.getUser(username , token)
    .subscribe( 
    data => {
    //sessionStorage.setItem('user' , data.token)
    console.log(data);
    data.forEach((element: { url:string ,email: string;user_name : string, user_type: any; }) => {
      if(element.email == username){
        sessionStorage.setItem('first_name' , element.user_name)
        sessionStorage.setItem('user_type' , element.user_type)
        sessionStorage.setItem('url' , element.url)
        switch (element.user_type) {
          case 1:
            this.router.navigate(['/theses']); 
            break;
          case 2:
            this.router.navigate(['/theses']); 
            break;
          case 3:
            this.router.navigate(['/theses']); 
            break;
          default:
            break;
        }
        
      }
      
    });
    
    
    
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

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  configUrl = 'https://app-pdqsdqs.herokuapp.com';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(private http: HttpClient) { }
  
    

  getToken(username : string, password : string) : Observable<any>  {
    return this.http.post(this.configUrl + '/auth/', {
      'username' : username,
      'password' : password,
      
    }, 
    {headers : this.httpHeaders});
  }

  getUser(username : string ,token : string): Observable<any>  {
    console.log('token '+ token);
    return this.http.get(this.configUrl + '/users/',
    {headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token '+ token
    })});
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

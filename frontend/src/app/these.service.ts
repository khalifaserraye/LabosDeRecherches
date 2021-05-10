import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { These } from 'src/models/These';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TheseService {
  configUrl = 'https://app-pdqsdqs.herokuapp.com';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'token ca727595c8af1756471264bc512a72b2189d8c86'
  })
  constructor(private http: HttpClient) { }
  private _item!:These ;
 
    setThese(item: These) {
        this._item = item;
    }
    getThese() {
      return this._item;
    }
    

  getConfig(token : string) : Observable<any>  {
    console.log('token '+ token);
    
    return this.http.get(this.configUrl + '/theses/', 
    {headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token '+ token
    })});
  }
  getChercheurData(token : string) : Observable<any>  {
    console.log('token '+ token);
    return this.http.get(this.configUrl + '/users/2/', 
    {headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token '+ token
    })});
  }
  createThese(these : any , token : string)  : Observable<any> {
    console.log('token '+ token);
    const body = these
  console.log(body);
  
    return this.http.post(this.configUrl + '/theses/', body ,
    {headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token '+ token
    })});
  }
  updateThese(these : any , token : string)  : Observable<any> {
    console.log('token '+ token);
    const body = these
  console.log(body);
  
    return this.http.put(these.url, body ,
    {headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token '+ token
    })});
  }
  deleteThese(these : any , token : string)  : Observable<any> {
    console.log('token '+ token);
    const body = these
  console.log(body);
  
    return this.http.delete(these.url, 
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

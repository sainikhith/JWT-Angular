import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http'
import { User } from './user.model';
import {Observable,of} from 'rxjs';
import { map,catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl ='http://localhost:56337/api/users';

  constructor(private http: HttpClient) { }

  userAuthentication(userName,password) : Observable<any>
  {
    //let userdata:any={"FirstName":"Ngag","LastName" :"b","Username" : "Na","Password" : 1289};
    let userdata:any={"Username" :userName,"Password" : password};
    //  return this.http.post(this.rootUrl, userdata);
     return this.http.post<any>(this.rootUrl,userdata).pipe(tap(userdata,catchError(this.handleError<any>('Asset Add Failed'))));
    //return this.http.get<any>(this.rootUrl).pipe(tap(),catchError(this.handleError<any>('Reason for request Add Failed')));

  }


  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T>=>{
      console.error(error);
      console.log('${operation}failed:${error.message}');
      return of (result as T);
    };
}
  


   getUserClaims(){ 
     return this.http.get(this.rootUrl+'./api/getuserClams',
     {headers: new HttpHeaders({'Autharization':'Bearer'+localStorage.getItem('userToken')})})
 //return this.http.get(this.rootUrl+'./api/getuserClams')
   }
  
    registerUser(user : User){
      const body: User = {
        ID: user.ID,
        UserName: user.UserName,
        Password: user.Password,
        Email: user.Email,       
        Mobile: user.Mobile
      }
      //var reqHeader = new HttpHeaders({'No-Auth':'True'})
      //return this.http.post(this.rootUrl + '/api/User/Register', body, {headers:reqHeader});    
      // return this.http.post(this.rootUrl + '/api/User/Register', body);
   }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor( private http:HttpClient) { }

//   getTeacher() 
  
//   {
//      let url="https://97mm2.sse.codesandbox.io/teachers/";
//      return this.http.get(url);
  
//   }
// }

getTeacher() {
  return this.http.get<any>("http://97mm2.sse.codesandbox.io/teachers/")
  .pipe(map((res:any)=>{
   return res;
}))
 }
}
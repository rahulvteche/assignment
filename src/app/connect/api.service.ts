import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http : HttpClient) { }

   postTeacher(data : any){
     return this.http.post<any>("https://97mm2.sse.codesandbox.io/teachers/",data)
     .pipe(map((res:any)=>{
      return res;
   }))
    }


getTeacher() {
  return this.http.get<any>("https://97mm2.sse.codesandbox.io/teachers/")
  .pipe(map((res:any)=>{
   return res;
}))
 }


updateTeacher(data : any,id:number){
  return this.http.put<any>("https://97mm2.sse.codesandbox.io/teachers/{{id}}",data)
  .pipe(map((res:any)=>{
   return res;
}))
 }


deleteTeacher(id : number){
  return this.http.delete<any>("https://97mm2.sse.codesandbox.io/teachers/{{id}}")
  .pipe(map((res:any)=>{
   return res;
}))
 }
}
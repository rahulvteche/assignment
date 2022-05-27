import { Component } from '@angular/core';
import {DetailsService} from './details.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeacherData';
 constructor(private details:DetailsService){

  this.details.getTeacher().subscribe( data=>{
    console.log(data)
  })
 }

}

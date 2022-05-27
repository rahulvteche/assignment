import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teacherModelObj:any;
  formValue !:FormGroup;
  constructor(private formbuilder: FormBuilder) { }


  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      age : [''],
      email : [''],
      class : [''],
    })
  }

postTeacherDetails(){
  this.teacherModelObj.firstName = this.formValue.value.firstName;
  this.teacherModelObj.lastName = this.formValue.value.lastName;
  this.teacherModelObj.age = this.formValue.value.age;
  this.teacherModelObj.email = this.formValue.value.email;
  this.teacherModelObj.class = this.formValue.value.class;


}
}
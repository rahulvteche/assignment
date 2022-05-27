import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';

const routes: Routes = [
  { path : 'teacherlist',
   component: TeacherListComponent   
},
{ path : 'teacherdetails',
   component:TeacherdetailsComponent
},
// {
//   path : '',
//   component:HomeComponent
// }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TeacherListComponent,TeacherdetailsComponent]

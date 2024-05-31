import { Routes } from '@angular/router';
import {StudentComponent} from "./student/student.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DetailComponent} from "./detail/detail.component";

export const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentComponent },
  { path: 'create-student', component: CreateComponent },
  { path: 'edit-student/:id', component: EditComponent },
  {path: 'detail/:id', component: DetailComponent},
];

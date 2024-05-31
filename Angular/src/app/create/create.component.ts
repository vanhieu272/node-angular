import { Component } from '@angular/core';
import {StudentService} from "../student.service";
import {FormsModule} from "@angular/forms";
import Swal from "sweetalert2";
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  stname: string = '';
  course: string = '';
  fee: string = '';

  constructor(private studentService: StudentService, private router: Router) { }

  register(){
    let bodyData = {
      "stname" :  this.stname,
      "course" : this.course,
      "fee" : this.fee,
    }
    this.studentService.createStudent(bodyData)
      .subscribe((resultData : any) => {
        Swal.fire({
          title: "Created successfully !!",
          icon: "success"
        });
        this.studentService.getAllStudents();
        this.router.navigate(['/']);
      })
  }
}

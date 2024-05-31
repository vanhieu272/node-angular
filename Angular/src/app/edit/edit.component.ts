import {Component} from '@angular/core';
import {StudentService} from "../student.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  stname: string = '';
  course: string = '';
  fee: string = '';
  currentId: string = '';

  constructor(private service: StudentService, private router: ActivatedRoute, private router1 : Router) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.currentId = params['id'];
      this.getStudentById(this.currentId);
    });
  }

  getStudentById(id: string) {
    try {
      this.service.findStudentById(id).subscribe((student: any) => {
        if (student) {
          this.stname = student.stname;
          this.course = student.course;
          this.fee = student.fee;
        }
      })

    } catch (e) {
      console.log(e);
    }
  }

  updateStudent() {
    let bodtData = {
      "stname": this.stname,
      "course": this.course,
      "fee": this.fee,
    }
    this.service.updateStudent(this.currentId, bodtData).subscribe(() => {
      Swal.fire({
        title: "Edited successfully !!",
        icon: "success"
      });
      this.service.getAllStudents();
      this.router1.navigate(['/']);
    })
  }
}

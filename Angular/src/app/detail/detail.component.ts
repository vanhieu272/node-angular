import { Component } from '@angular/core';
import {StudentService} from "../student.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  stname: string = '';
  course: string = '';
  fee: string = '';
  currentId: string = '';

  constructor(private service: StudentService, private route: ActivatedRoute ,private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentId = params['id'];
      this.getStudentById(this.currentId);
    });
  }

  getStudentById(id: string){
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
}

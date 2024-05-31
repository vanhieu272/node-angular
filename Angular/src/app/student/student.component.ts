import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import Swal from 'sweetalert2';
import {StudentService} from "../student.service";
import {HttpClient} from "@angular/common/http";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent{
  tittle = 'Codegym';
  StudentArray: any[] = [];
  isResultLoaded = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe((resultData: any) => {
      this.isResultLoaded = true;
      this.StudentArray = resultData;
    });
  }

  setDelete(data: any)
  {
    Swal.fire({
      title: `Are you sure want to delete ${data.stname}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.deleteStudent(data._id).subscribe((resultData: any)=>
        {
          this.getAllStudents();
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }


// @Injectable({
//   providedIn: 'root'
// })
// export class StudentComponent {
//   StudentArray : any[] = [];
//   isResultLoaded = false;
//   isUpdateFormActive = false;
//   stname: string ="";
//   course: string ="";
//   fee: string ="";
//   currentStudentID = "";
//   constructor(private http : HttpClient) {
//     this.getAllStudents();
//   }
//
//   ngOnInit():void{
//   }
//
//   private getAllStudents() {
//     this.http.get(`http://localhost:3001/api/student/findAll`)
//       .subscribe((resultData : any) => {
//         this.isResultLoaded = true;
//         this.StudentArray = resultData;
//       });
//   }
//
//   private register(){
//     let bodyData = {
//       "stname" :  this.stname,
//       "course" : this.course,
//       "fee" : this.fee,
//     }
//     this.http.post(`http://localhost:3001/api/student/create`, bodyData)
//       .subscribe((resultData : any) => {
//       });
//     this.getAllStudents();
//   }
//
//   //test
//   setUpdate(data: any)
//   {
//     console.log(data, 'data')
//     this.stname = data.stname;
//     this.course = data.course;
//     this.fee = data.fee;
//
//     this.currentStudentID = data._id;
//
//   }
//
//   UpdateRecords()
//   {
//     let bodyData =
//       {
//         "stname" : this.stname,
//         "course" : this.course,
//         "fee" : this.fee
//       };
//
//     this.http.patch(`http://localhost:3001/api/student/update/`+ this.currentStudentID,bodyData).subscribe((resultData: any)=>
//     {
//       console.log(resultData);
//       alert("Student Registered Updateddd")
//       this.getAllStudents();
//
//     });
//   }
//
//   save()
//   {
//     if(this.currentStudentID == '')
//     {
//       this.register();
//     }
//     else
//     {
//       this.UpdateRecords();
//     }
//   }

//   setDelete(data: any)
//   {
//     Swal.fire({
//       title: `Are you sure want to delete ${data.stname}?`,
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         this.http.delete("http://localhost:3001/api/student/delete"+ "/"+ data._id).subscribe((resultData: any)=>
//         {
//           this.getAllStudents();
//         });
//         Swal.fire({
//           title: "Deleted!",
//           text: "Your file has been deleted.",
//           icon: "success"
//         });
//       }
//     });
//   }
// }
}


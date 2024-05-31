import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:3001/api/student';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAll`);
  }

  createStudent(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, data);
  }

  updateStudent(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/update/${id}`, data);
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  findStudentById(id: string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/find/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IDocentes, IDocente } from '../pages/interfaces/interfaces';
import { IAlumnos, IAlumno } from '../pages/interfaces/interfaces';
import { IQRs, IQR } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private HttpClient: HttpClient,
              private router: Router) { }
  
  apiurl = environment.apiURL 
    
  GetAllUsers():Observable<IDocentes>{
    //return this.HttpClient.get<IDocentes>(`${environment.apiURL}/docentes`);
    return this.HttpClient.get<IDocentes>(`${this.apiurl}/docentes`);
  }

  GetDocenteByEmail(codigo: any):Observable<IDocentes>{
    //return this.HttpClient.get<IDocentes>(`${environment.apiURL}/docentes/?email=${codigo}`);
    return this.HttpClient.get<IDocentes>(`${this.apiurl}/docentes/?email=${codigo}`);
  }

  GetAlumnoByEmail(codigo: any):Observable<IAlumnos>{
    //return this.HttpClient.get<IAlumnos>(`${environment.apiURL}/alumnos/?email=${codigo}`);
    return this.HttpClient.get<IAlumnos>(`${this.apiurl}/alumnos/?email=${codigo}`);
  }

  UpdateAlumno(alumno:any):Observable<IAlumnos>{
    //return this.HttpClient.put<IAlumnos>(`${environment.apiURL}/alumnos/${alumno.id}`, alumno);
    return this.HttpClient.put<IAlumnos>(`${this.apiurl}/alumnos/${alumno.id}`, alumno);
  }

  UpdateProfesor(docente:any):Observable<IDocentes>{
    //return this.HttpClient.put<IDocentes>(`${environment.apiURL}/docentes/${docente.id}`, docente);
    return this.HttpClient.put<IDocentes>(`${this.apiurl}/docentes/${docente.id}`, docente);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('email')!=null;
  }

  userPriority(){
    return sessionStorage.getItem("priority");
  }
  
  LogoutUser(){
    sessionStorage.clear();
    this.router.navigateByUrl("/inicio").then(() => {
      window.location.reload();});
  }
  
  //Page del QR
  CrearMensaje(newmensaje:IQR):Observable<IQR>{
    return this.HttpClient.post<IQRs>(`${environment.apiURL}/QRS`, newmensaje);
  }

  getAllQR(email:any):Observable<IQRs>{
    return this.HttpClient.get<IQRs>(`${environment.apiURL}/QRS/?correoProfesor=${email}`);
  }

}

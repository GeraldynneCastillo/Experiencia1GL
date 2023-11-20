import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDocente, IDocentes } from '../pages/interfaces/interfaces';
import { IAlumno, IAlumnos } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private HttpClient: HttpClient) { }

  crearProfesor(Profe:IDocente):Observable<IDocente>{
    return this.HttpClient.post<IDocentes>(`${environment.apiURL}/docentes`,Profe);
  }
  crearAlumno(Alumno:IAlumno):Observable<IAlumno>{
    return this.HttpClient.post<IAlumnos>(`${environment.apiURL}/alumnos`,Alumno);
  }
}

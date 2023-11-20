import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public priority: any;
  usuario={
    id:"",
    nombre:"",
    email:"",
    password:"",
    asignatura1:"",
    asignatura2:"",
    carrera:"",
    sede:""
  }

  constructor(private authservice: AuthService,
              private router: Router) { this.ionViewWillEnter(); }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let priority = sessionStorage.getItem("priority");
    let email = sessionStorage.getItem("email");

    if (priority){
      priority = priority;
    }
    if (email){
      email = email;
    }

    this.getAlumnoByEmail(email);
    this.getDocenteByEmail(email);

    this.priority = this.authservice.userPriority();
  }

  getAlumnoByEmail(email:any){
    this.authservice.GetAlumnoByEmail(email).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.usuario={
          id: resp[0].id,
          nombre : resp[0].nombre,
          email : resp[0].email,
          password: resp[0].password,
          asignatura1: resp[0].asignatura1,
          asignatura2: resp[0].asignatura2,
          carrera : resp[0].carrera,
          sede : resp[0].sede
        }
      }
    )
  }
  getDocenteByEmail(email:any){
    this.authservice.GetDocenteByEmail(email).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.usuario={
          id: resp[0].id,
          nombre : resp[0].nombre,
          email : resp[0].email,
          password: resp[0].password,
          asignatura1 : resp[0].asignatura1,
          asignatura2 : resp[0].asignatura2,
          carrera : resp[0].carrera,
          sede : resp[0].sede
        }
      }
    )
  }

  updateAlumno(){
    this.authservice.UpdateAlumno(this.usuario).subscribe();
    sessionStorage.setItem('nombre',this.usuario.nombre);  
    this.router.navigateByUrl("/inicio");
  }

  updateProfesor(){
    this.authservice.UpdateProfesor(this.usuario).subscribe();
    sessionStorage.setItem('nombre',this.usuario.nombre); 
    this.router.navigateByUrl("/inicio"); 
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inisesion-alumno',
  templateUrl: './inisesion-alumno.page.html',
  styleUrls: ['./inisesion-alumno.page.scss'],
})
export class InisesionAlumnoPage implements OnInit {

  userdata: any;
  loginAlumnoForm: FormGroup;
  bandera:boolean = false;

  usuario={
    id:0,
    email:"",
    nombre:"",
    password:"",
    carrera:"",
    sede:""
  }

  constructor(public authservice: AuthService, 
    private router: Router,
    private builder: FormBuilder) { 
      this.loginAlumnoForm = this.builder.group({
        'email': new FormControl("", [Validators.required, Validators.minLength(4)]),
        'password': new FormControl("", [Validators.required, Validators.minLength(4)])
      })
     }

  ngOnInit() {
  }

  login(){
    this.bandera = false;
    if (this.loginAlumnoForm.valid){
      this.authservice.GetAlumnoByEmail(this.loginAlumnoForm.value.email).subscribe(resp=>{
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length>0){ 
          this.usuario={
            id : this.userdata[0].id,
            email : this.userdata[0].email,
            nombre : this.userdata[0].nombre,
            password : this.userdata[0].password,
            carrera : this.userdata[0].carrera,
            sede : this.userdata[0].sede
          }
          if (this.usuario.password === this.loginAlumnoForm.value.password){
            sessionStorage.setItem('email',this.usuario.email);
            sessionStorage.setItem('nombre',this.usuario.nombre);
            sessionStorage.setItem('carrera',this.usuario.carrera);
            sessionStorage.setItem('sede', this.usuario.sede);
            sessionStorage.setItem('priority', 'false');
            this.router.navigateByUrl("/inicio").then(() => {
              window.location.reload();});
          }
        }if (this.usuario.password != this.loginAlumnoForm.value.password){
          this.bandera = true;
        }
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inisesion',
  templateUrl: './inisesion.page.html',
  styleUrls: ['./inisesion.page.scss'],
})
export class InisesionPage implements OnInit {

  userdata: any;
  loginForm: FormGroup;
  bandera:boolean = false;

  usuario={
    id:0,
    email:"",
    nombre:"",
    password:"",
    asignatura1:"",
    asignatura2:"",
    sede:""
  }

  constructor(public authservice: AuthService, 
    private router: Router,
    private builder: FormBuilder) { 
      this.loginForm = this.builder.group({
        'email': new FormControl("", [Validators.required, Validators.minLength(4)]),
        'password': new FormControl("", [Validators.required, Validators.minLength(4)])
      })
     }

  ngOnInit() {}

  login(){
    this.bandera = false;
    if (this.loginForm.valid){
      this.authservice.GetDocenteByEmail(this.loginForm.value.email).subscribe(resp=>{
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length>0){ //Si se encuentra el objeto, lentgh devuelve valor:1
          this.usuario={
            id : this.userdata[0].id,
            email : this.userdata[0].email,
            nombre : this.userdata[0].nombre,
            password : this.userdata[0].password,
            asignatura1 : this.userdata[0].asignatura1,
            asignatura2 : this.userdata[0].asignatura2,
            sede : this.userdata[0].sede
          }
          if (this.usuario.password === this.loginForm.value.password){
            //iniciamos sesion
            sessionStorage.setItem('email',this.usuario.email);
            sessionStorage.setItem('nombre',this.usuario.nombre);
            sessionStorage.setItem('asignatura1',this.usuario.asignatura1);
            sessionStorage.setItem('asignatura2',this.usuario.asignatura2);
            sessionStorage.setItem('sede', this.usuario.sede);
            sessionStorage.setItem('priority', 'true');
            this.router.navigateByUrl("/inicio").then(() => {
              window.location.reload();});
          }
        }if (this.usuario.password != this.loginForm.value.password){
          this.bandera = true;
        }
      });
    }
  }
}



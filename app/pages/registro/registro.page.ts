import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegistroService } from 'src/app/servicios/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registerForm: FormGroup;
  userdata: any; 

  Docente={
    nombre:"",
    email:"",
    password:"",
    asignatura1:"",
    asignatura2:"",
    sede:""
  }

  constructor(
    private apicrud: RegistroService,
    private fbuilder: FormBuilder) { 
      this.registerForm = this.fbuilder.group({
        'nombre': new FormControl("",[Validators.required, Validators.minLength(4)]),
        'email':new FormControl("", [Validators.required,Validators.email]),
        'password': new FormControl("",[Validators.required, Validators.minLength(8)]),
        'asignatura1': new FormControl("",[Validators.required]),
        'asignatura2': new FormControl("",[Validators.required]),
        'sede': new FormControl("",[Validators.required]),
      })
    }

  ngOnInit() {
  }

  registroDocente() {
    if (this.registerForm.valid) {
      this.apicrud.crearProfesor(this.registerForm.value).subscribe(resp => {
        this.userdata = resp;
        if (this.userdata.length > 0) {
          this.Docente = {
            nombre: this.userdata[0].nombre,
            email: this.userdata[0].email,
            password: this.userdata[0].password,
            asignatura1: this.userdata[0].asignatura1,
            asignatura2: this.userdata[0].asignatura2,
            sede: this.userdata[0].sede
          };
        }
      });
    }
  }

  
}

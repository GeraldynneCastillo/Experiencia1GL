import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  registerAlumnoForm: FormGroup;
  userdata: any; 

  Docente={
    nombre:"",
    email:"",
    password:"",
    carrera:"",
    sede:""
  }

  constructor(
    private apicrud: RegistroService,
    private fbuilder: FormBuilder) { 
      this.registerAlumnoForm = this.fbuilder.group({
        'nombre': new FormControl("",[Validators.required, Validators.minLength(4)]),
        'email':new FormControl("", [Validators.required,Validators.email]),
        'password': new FormControl("",[Validators.required, Validators.minLength(8)]),
        'carrera': new FormControl("",[Validators.required]),
        'sede': new FormControl("",[Validators.required]),
      })
    }

  ngOnInit() {
  }

  registroAlumno() {
    if (this.registerAlumnoForm.valid) {
      this.apicrud.crearAlumno(this.registerAlumnoForm.value).subscribe(resp => {
        this.userdata = resp;
        if (this.userdata.length > 0) {
          this.Docente = {
            nombre: this.userdata[0].nombre,
            email: this.userdata[0].email,
            password: this.userdata[0].password,
            carrera: this.userdata[0].carrera,
            sede: this.userdata[0].sede
          };
        }
      });
    }
  }

}

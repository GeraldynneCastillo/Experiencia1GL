import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  componentes : Componente[]=[
    {
      name:'Inicio',
      redirecTo: '/inicio',
      icon:'home-outline'
    },
    {
      name:'Iniciar sesion',
      redirecTo: '/inisesion',
      icon:'log-in-outline'
    },
    {
      name:'Registrarse',
      redirecTo: '/registro',
      icon:'person-add-outline'
    },
    {
      name:'Feriados',
      redirecTo: '/feriados',
      icon:'calendar-number-outline'
    },
    {
      name:'Perfil',
      redirecTo: '/perfil',
      icon:'person-outline'
    },
    {
      name:'Información',
      redirecTo: '/infoapp',
      icon:'hardware-chip-outline'
    }
  ]
  constructor() {}
}
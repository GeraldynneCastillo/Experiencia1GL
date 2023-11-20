import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  priority: any;
  usuario = {
    nombre:"",
  }

  constructor(private menuController: MenuController,
              public authservice: AuthService) { this.ObtainStorage(); }

  ngOnInit() {
  }

  ObtainStorage(){
    let nombre = sessionStorage.getItem("nombre");
    let prioridad = sessionStorage.getItem("priority");
     
    if (nombre) {
      this.usuario.nombre = nombre;
    }
    if (prioridad) {
      this.priority = prioridad;
    }
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  logout() {
    this.authservice.LogoutUser();
  }

}
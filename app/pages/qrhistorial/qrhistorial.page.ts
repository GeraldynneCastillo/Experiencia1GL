import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { IQRs } from '../interfaces/interfaces';

@Component({
  selector: 'app-qrhistorial',
  templateUrl: './qrhistorial.page.html',
  styleUrls: ['./qrhistorial.page.scss'],
})
export class QrhistorialPage{
  usuario={
    email:''
  }

  mensajes:IQRs[]=[];

  constructor(private router: Router,
    private loadCtrl: LoadingController,
    private authservice: AuthService) { }

  ionViewWillEnter(){
    this.LoadQRs();
    let correo = sessionStorage.getItem("email");


    if (correo){
      this.usuario.email = correo;
    }
    
  }

  async LoadQRs(event?:InfiniteScrollCustomEvent){
    const load = await this.loadCtrl.create({ 
      message: "Cargando Códigos QR",
      spinner:"crescent"
    });
    await load.present();

    this.authservice.getAllQR(this.usuario.email).subscribe({ 
      next:resp=>{
        console.log(resp);
        load.dismiss();
        let listString = JSON.stringify(resp); //Convertimos a String nuestro resp
        this.mensajes = JSON.parse(listString); //Convertiremos a JSON el string para almacenar
        event?.target.complete();
        console.log(this.mensajes)
      },
      error: err=>{
        console.log(err.error.message);
        load.dismiss();
      }
    })
  }


}

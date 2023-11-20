import { Component, OnInit } from '@angular/core';
import { IQR } from '../interfaces/interfaces';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-qrcreate',
  templateUrl: './qrcreate.page.html',
  styleUrls: ['./qrcreate.page.scss'],
})
export class QrcreatePage{
  userdata: any;

  public asignatura1: any;
  public asignatura2: any;
  public mensaje: string;

  data={
    texto:'',
    asignaturaProfe:''
  }

  email: any;
  fechatostring: any;

  newPalabra: IQR={
    contenido:'',
    correoProfesor:'',
    asignatura:'',
    fechaCreacion:'',
  }

  constructor(private authservice: AuthService,
    private alertcontroller: AlertController, 
    private toastcontroller: ToastController) { this.mensaje=''; }

  ionViewWillEnter(){ 
    this.email = sessionStorage.getItem("email");
    this.asignatura1 = sessionStorage.getItem("asignatura1");
    this.asignatura2 = sessionStorage.getItem("asignatura2");
    this.mensaje='';
  }

  ngOnInit() {
  }
            
  generarQr(){
    this.mensaje=this.data.texto;
    this.newPalabra.contenido=this.mensaje;
    this.newPalabra.correoProfesor=this.email;
    this.newPalabra.asignatura=this.data.asignaturaProfe;

    this.fechatostring = new Date().toLocaleString()
    this.newPalabra.fechaCreacion = this.fechatostring;

    this.authservice.CrearMensaje(this.newPalabra).subscribe();
    this.showToast('Se ha generado el QR correctamente!');
    this.data.texto='';
  }

  async showToast(msg:any){
    const toast= await this.toastcontroller.create({
      message: msg,
      duration: 1000
    })
    toast.present();
  }

}

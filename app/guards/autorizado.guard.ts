import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard implements CanActivate {
  constructor(private authservice: AuthService,
            private router: Router,
            private toastcontroller: ToastController){

}

  canActivate():
    
    | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (! this.authservice.IsLoggedIn()){
        this.showToast('Debe Inicar Sesión Para Acceder');
        this.router.navigateByUrl("/inisesion");
        return false;
      }
      this.authservice.IsLoggedIn();
      return true;
  }

  async showToast(msg:any){
    const toast= await this.toastcontroller.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }
  
}

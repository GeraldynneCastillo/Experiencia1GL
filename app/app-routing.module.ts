import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inisesion',
    loadChildren: () => import('./pages/inisesion/inisesion.module').then( m => m.InisesionPageModule)
  },
  {
    path: 'infoapp',
    loadChildren: () => import('./pages/infoapp/infoapp.module').then( m => m.InfoappPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'seleccion',
    loadChildren: () => import('./pages/seleccion/seleccion.module').then( m => m.SeleccionPageModule)
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule)
  },
  {
    path: 'seleccion-sesion',
    loadChildren: () => import('./pages/seleccion-sesion/seleccion-sesion.module').then( m => m.SeleccionSesionPageModule)
  },
  {
    path: 'inisesion-alumno',
    loadChildren: () => import('./pages/inisesion-alumno/inisesion-alumno.module').then( m => m.InisesionAlumnoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'qrcreate',
    loadChildren: () => import('./pages/qrcreate/qrcreate.module').then( m => m.QrcreatePageModule)
  },
  {
    path: 'qrhistorial',
    loadChildren: () => import('./pages/qrhistorial/qrhistorial.module').then( m => m.QrhistorialPageModule)
  },
  {
    path: 'qrscanner',
    loadChildren: () => import('./pages/qrscanner/qrscanner.module').then( m => m.QrscannerPageModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

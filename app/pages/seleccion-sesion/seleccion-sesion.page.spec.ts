import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionSesionPage } from './seleccion-sesion.page';

describe('SeleccionSesionPage', () => {
  let component: SeleccionSesionPage;
  let fixture: ComponentFixture<SeleccionSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

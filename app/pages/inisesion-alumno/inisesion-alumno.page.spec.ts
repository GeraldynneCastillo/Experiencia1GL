import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InisesionAlumnoPage } from './inisesion-alumno.page';

describe('InisesionAlumnoPage', () => {
  let component: InisesionAlumnoPage;
  let fixture: ComponentFixture<InisesionAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InisesionAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

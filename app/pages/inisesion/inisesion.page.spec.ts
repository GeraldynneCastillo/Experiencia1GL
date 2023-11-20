import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InisesionPage } from './inisesion.page';

describe('InisesionPage', () => {
  let component: InisesionPage;
  let fixture: ComponentFixture<InisesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InisesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

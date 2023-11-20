import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrhistorialPage } from './qrhistorial.page';

describe('QrhistorialPage', () => {
  let component: QrhistorialPage;
  let fixture: ComponentFixture<QrhistorialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrhistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

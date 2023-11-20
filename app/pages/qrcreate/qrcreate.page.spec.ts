import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrcreatePage } from './qrcreate.page';

describe('QrcreatePage', () => {
  let component: QrcreatePage;
  let fixture: ComponentFixture<QrcreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrcreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

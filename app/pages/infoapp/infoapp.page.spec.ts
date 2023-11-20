import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoappPage } from './infoapp.page';

describe('InfoappPage', () => {
  let component: InfoappPage;
  let fixture: ComponentFixture<InfoappPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

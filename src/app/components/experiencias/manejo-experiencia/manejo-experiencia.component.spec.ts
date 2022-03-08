import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoExperienciaComponent } from './manejo-experiencia.component';

describe('ManejoExperienciaComponent', () => {
  let component: ManejoExperienciaComponent;
  let fixture: ComponentFixture<ManejoExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejoExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

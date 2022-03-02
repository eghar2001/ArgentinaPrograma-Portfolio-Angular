import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosCertificacionesComponent } from './estudios-certificaciones.component';

describe('EstudiosCertificacionesComponent', () => {
  let component: EstudiosCertificacionesComponent;
  let fixture: ComponentFixture<EstudiosCertificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosCertificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosCertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

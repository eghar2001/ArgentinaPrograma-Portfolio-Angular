import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoEducacionComponent } from './manejo-educacion.component';

describe('AgregarEducacionComponent', () => {
  let component: ManejoEducacionComponent;
  let fixture: ComponentFixture<ManejoEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejoEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProfileComponent } from './editar-profile.component';

describe('EditarProfileComponent', () => {
  let component: EditarProfileComponent;
  let fixture: ComponentFixture<EditarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

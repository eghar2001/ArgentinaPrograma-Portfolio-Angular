import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAndLoginComponent } from './buttons-and-login.component';

describe('ButtonsAndLoginComponent', () => {
  let component: ButtonsAndLoginComponent;
  let fixture: ComponentFixture<ButtonsAndLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsAndLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsAndLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

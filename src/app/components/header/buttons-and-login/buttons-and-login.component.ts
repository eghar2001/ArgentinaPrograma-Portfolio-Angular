import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-and-login',
  templateUrl: './buttons-and-login.component.html',
  styleUrls: ['./buttons-and-login.component.css']
})
export class ButtonsAndLoginComponent implements OnInit {
  @Output() activarForm= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  activaForm(){
    this.activarForm.emit();
  }
}

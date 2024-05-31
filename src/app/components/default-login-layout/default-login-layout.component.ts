import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.css'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primarybtntext : string = "";
  @Input() secondarybtntext: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
  navigate(){
  this.onNavigate.emit();
  }
  }


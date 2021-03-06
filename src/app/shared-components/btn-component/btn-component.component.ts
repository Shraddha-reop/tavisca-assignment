import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './btn-component.component.html',
  styleUrls: ['./btn-component.component.scss']
})
export class ButtonComponent {
  @Input() buttonConfig: any = null;
  constructor() { }
}
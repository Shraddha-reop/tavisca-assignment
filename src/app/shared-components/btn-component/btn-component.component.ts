import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './btn-component.component.html',
  styleUrls: ['./btn-component.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfig: any;
  constructor() {}

  ngOnInit() {}
}
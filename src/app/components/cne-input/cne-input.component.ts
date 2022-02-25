import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cne-input',
  templateUrl: './cne-input.component.html',
  styleUrls: ['./cne-input.component.scss']
})
export class CneInputComponent implements OnInit {

  constructor() { }

  @Input() size!:string

  ngOnInit(): void {
  }

}

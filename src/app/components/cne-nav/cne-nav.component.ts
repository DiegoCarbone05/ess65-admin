import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cne-nav',
  templateUrl: './cne-nav.component.html',
  styleUrls: ['./cne-nav.component.scss']
})
export class CneNavComponent implements OnInit {

  constructor() { }

  @Input() outline:any

  ngOnInit(): void {
    console.log(this.outline);

  }

}

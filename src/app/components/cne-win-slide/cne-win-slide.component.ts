import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'cne-win-slide',
  templateUrl: './cne-win-slide.component.html',
  styleUrls: ['./cne-win-slide.component.scss']
})

export class CneWinSlideComponent implements OnInit {

  @ViewChild("toggleButton") toggleBtn!:ElementRef;
  toggleStatus:boolean = false

  constructor() {
    
  }

  /**
   * Datos de entrada y salida del toggle
   */
  @Output() statusChange = new EventEmitter<boolean>();
  @Input() externalStatus!:boolean

  ngOnInit(): void {
    //cargando el status externo del toggle
    this.toggleStatus = this.externalStatus
  }

  ngAfterViewInit() {
    //refrescando al toggle
  }


  /**
   * Seccion config del Toggle
   */
  invertStatusToggle(){
    this.toggleStatus = !this.toggleStatus
    this.statusChange.emit(this.toggleStatus);
  }

  //-//


}

import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public uiSvc:UiService) { }

  ngOnInit(): void {
    this.uiSvc.titleSeccionNav = 'Contenido'
  }

}

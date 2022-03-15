import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-web-config',
  templateUrl: './web-config.component.html',
  styleUrls: ['./web-config.component.scss']
})
export class WebConfigComponent implements OnInit {

  constructor(public apiSvc:ApiService, public uiSvc:UiService) { }

  panelOpenState = true

  ngOnInit(): void {
    this.uiSvc.titleSeccionNav = 'Inicio'
  }

  saveChanges(){
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cne-nav',
  templateUrl: './cne-nav.component.html',
  styleUrls: ['./cne-nav.component.scss']
})
export class CneNavComponent implements OnInit {

  constructor(public uiSvc:UiService) { }

  @Input() outline:any

  ngOnInit(): void { }

  openAside(){
    this.uiSvc.sidenavStatus = !this.uiSvc.sidenavStatus
  }
}

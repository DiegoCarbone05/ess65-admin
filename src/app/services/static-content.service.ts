import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StaticContentService {

  staticContent$ = new BehaviorSubject<any[]>([]);
  constructor(private apiSvc:ApiService) {
    this.getStaticConfigFromServer()
  }

  getStaticConfigFromServer(){
    const obs = this.apiSvc.getStaticConfig();
    obs.subscribe((value) => {
      this.staticContent$.next(value);
    });
    return obs;
  }

  getStaticConfig(){
    return this.staticContent$;
  }

  setStaticConfig(staticConfig: any) {
    console.log('llego a setStaticConfig', staticConfig );
    return this.apiSvc.setStaticConfig(staticConfig);
  }

}

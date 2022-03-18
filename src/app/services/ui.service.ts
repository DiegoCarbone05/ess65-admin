import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  sidenavStatus = false;
  titleSeccionNav:string = "";

  //NewsComponents
  editMode:boolean = false

  //Mat-sound
  touchSound(): void {
    const audio = new Audio();
    audio.src = '../../assets/sounds/03 Primary System Sounds/ui_tap-variant-01.wav';
    audio.load();
    audio.play();
  }


}

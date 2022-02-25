import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CneButtonDirective } from './cne-button.directive';



@NgModule({
  declarations: [
    CneButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CneButtonDirective
  ]

})
export class DirectivesModule { }

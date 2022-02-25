import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CneNavComponent } from './cne-nav/cne-nav.component';
import { CneBannerEditorComponent } from './cne-banner-editor/cne-banner-editor.component';
import { CneAlertEditorComponent } from './cne-alert-editor/cne-alert-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CneWinSlideComponent } from './cne-win-slide/cne-win-slide.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { CneInputComponent } from './cne-input/cne-input.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    CneNavComponent,
    CneBannerEditorComponent,
    CneAlertEditorComponent,
    CneWinSlideComponent,
    CneInputComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatMenuModule
  ],
  exports:[
    CneNavComponent,
    CneBannerEditorComponent,
    CneAlertEditorComponent,
    CneWinSlideComponent,
    CneInputComponent,

  ]
})
export class ComponentsModule { }

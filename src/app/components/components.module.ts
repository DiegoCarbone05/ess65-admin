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
import { CneTitleBarComponent } from './cne-title-bar/cne-title-bar.component';
import { CardGroupComponent } from './card-group/card-group.component';
import {MatInputModule} from '@angular/material/input';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    CneNavComponent,
    CneBannerEditorComponent,
    CneAlertEditorComponent,
    CneWinSlideComponent,
    CneInputComponent,
    CneTitleBarComponent,
    CardGroupComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatMenuModule,
    MatInputModule,
    NgxMatColorPickerModule,
    MatRippleModule
  ],
  providers:[
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  exports:[
    CneNavComponent,
    CneBannerEditorComponent,
    CneAlertEditorComponent,
    CneWinSlideComponent,
    CneInputComponent,
    CneTitleBarComponent,
    CardGroupComponent,

  ]
})
export class ComponentsModule { }

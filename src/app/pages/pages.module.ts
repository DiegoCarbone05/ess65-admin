import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebConfigComponent } from './web-config/web-config.component';
import { ComponentsModule } from '../components/components.module';
import { UsersComponent } from './users/users.component';
import { NewsComponent } from './news/news.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ConfigComponent } from './config/config.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import { CneButtonDirective } from '../directives/cne-button.directive';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    WebConfigComponent,
    UsersComponent,
    NewsComponent,
    ConfigComponent,
    UserDialogComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatStepperModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  exports: [
    WebConfigComponent,
    UsersComponent,
    NewsComponent,
    ConfigComponent,
    UserDialogComponent,
  ]
})
export class PagesModule { }

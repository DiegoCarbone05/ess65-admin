import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebConfigComponent } from './web-config/web-config.component';
import { ComponentsModule } from '../components/components.module';
import { UsersComponent } from './users/users.component';
import { NewsComponent } from './news/news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ConfigComponent } from './config/config.component';
import { CneButtonDirective } from '../directives/cne-button.directive';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    WebConfigComponent,
    UsersComponent,
    NewsComponent,
    ConfigComponent,
    UserDialogComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatStepperModule,
    MatProgressBarModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDividerModule,
    MatToolbarModule
  ],
  exports: [
    WebConfigComponent,
    UsersComponent,
    NewsComponent,
    ConfigComponent,
    UserDialogComponent,
    LoginComponent,

  ]
})
export class PagesModule { }

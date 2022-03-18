import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './pages/config/config.component';
import { ContentComponent } from './pages/content/content.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'users', component: UsersComponent},
  {path: 'config', component: ConfigComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

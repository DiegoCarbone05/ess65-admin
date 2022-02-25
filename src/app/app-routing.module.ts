import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './pages/config/config.component';
import { NewsComponent } from './pages/news/news.component';
import { UsersComponent } from './pages/users/users.component';
import { WebConfigComponent } from './pages/web-config/web-config.component';

const routes: Routes = [
  {path: '', component: WebConfigComponent},
  {path: 'users', component: UsersComponent},
  {path: 'news', component: NewsComponent},
  {path: 'config', component: ConfigComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
  { path: 'add-user', component: AdduserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { UsersComponent } from './user-home/users/users.component';
import { UserProfileComponent } from './user-home/user-profile/user-profile.component';
import { LoggedInAuthGuard } from './_guards/logged-in-auth.guard';
import { UserDetailResolver } from './_resolvers/user-provile.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'counter', component: CounterComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserProfileComponent, resolve: {user: UserDetailResolver} },
    ],
  },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

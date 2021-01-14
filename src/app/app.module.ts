import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { appRoutes } from './routes';
import { UsersComponent } from './user-home/users/users.component';
import { UserProfileComponent } from './user-home/user-profile/user-profile.component';
import { UserCardComponent } from './user-home/user-card/user-card.component';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { UserDetailResolver } from './_resolvers/user-provile.resolver';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    LoginComponent,
    UsersComponent,
    UserProfileComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:6117'],
        blacklistedRoutes: ['localhost:6117/api/auth'],
      },
    }),
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    UserDetailResolver
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

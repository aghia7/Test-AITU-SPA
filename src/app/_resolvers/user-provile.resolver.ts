import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { UserService } from '../_services/user.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserDetailResolver implements Resolve<User> {
  constructor(
    private router: Router,
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params.id).pipe(
      catchError((error) => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/users']);
        return of(null);
      })
    );
  }
}

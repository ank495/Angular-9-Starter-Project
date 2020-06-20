import { DemoFirstComponent } from './demo-first/demo-first.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationDeactiveGuard implements CanDeactivate<DemoFirstComponent> {
  // tslint:disable-next-line:max-line-length
  canDeactivate(component: DemoFirstComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(currentRoute.params);
    console.log(currentState.url);
    return window.confirm('Are you sure you want to leave ?');
  }

}

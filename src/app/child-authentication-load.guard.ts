import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';


// It is for lazy loading
@Injectable({
  providedIn: 'root'
})
export class ChildAuthenticationLoadGuard implements CanLoad {
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    window.alert('You want to load');
    return false;
  }
}

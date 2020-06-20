import { ChildAuthenticationLoadGuard } from './child-authentication-load.guard';
import { ChildAuthenticationGuard } from './child-authentication.guard';
import { AuthenticationDeactiveGuard } from './authentication-deactive.guard';
import { AuthenticationGuard } from './authentication.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';

import { DemoFirstComponent } from './demo-first/demo-first.component';
import { DemoThirdComponent } from './demo-third/demo-third.component';
import { DemoSecondComponent } from './demo-second/demo-second.component';
import { DemoChildSecondComponent } from './demo-child-second/demo-child-second.component';
import { DemoChildFirstComponent } from './demo-child-first/demo-child-first.component';

const routes: Routes = [
  {
    path: 'firstComponent',
    component: DemoFirstComponent,
    canActivateChild: [ChildAuthenticationGuard],
    children: [
      {
        path: 'childFirst',
        component: DemoChildFirstComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'childSecond',
        component: DemoChildSecondComponent,
        canDeactivate: [AuthenticationDeactiveGuard]
      }
    ]
  },
  {
    path: 'secondComponent',
    component: DemoSecondComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'thirdComponent',
    component: DemoThirdComponent,
    canDeactivate: [AuthenticationDeactiveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

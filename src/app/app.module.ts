import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFirstComponent } from './demo-first/demo-first.component';
import { DemoSecondComponent } from './demo-second/demo-second.component';
import { DemoThirdComponent } from './demo-third/demo-third.component';
import { DemoChildFirstComponent } from './demo-child-first/demo-child-first.component';
import { DemoChildSecondComponent } from './demo-child-second/demo-child-second.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFirstComponent,
    DemoSecondComponent,
    DemoThirdComponent,
    DemoChildFirstComponent,
    DemoChildSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

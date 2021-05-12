import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuspenseComponent } from './suspense/suspense.component';
import { TerrorComponent } from './page/terror/terror.component';
import { AventuraComponent } from './page/aventura/aventura.component';

@NgModule({
  declarations: [
    AppComponent,
    SuspenseComponent,
    TerrorComponent,
    AventuraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

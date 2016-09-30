import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
// Firebase
import { AuthModule } from '../auth';
import { FirebaseModule } from '../firebase';
// Modules
import { DashboardModule } from '../dashboard';
// App entry
import { AppComponent } from './components/app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    MaterialModule.forRoot(),
    HttpModule,

    AuthModule,
    FirebaseModule,

    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

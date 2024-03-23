import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './back_office/sidenav/sidenav.component';
import { HeaderComponent } from './back_office/header/header.component';
import { ProfileComponent } from './back_office/profile/profile.component';
import { UsersComponent } from './back_office/users/users.component';
import { HomeComponent } from './back_office/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    ProfileComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

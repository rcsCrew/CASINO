import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './pages/hub/hub.component';
import { NgOptimizedImage } from '@angular/common';



import {
  register as registerSwiperElements,
} from 'swiper/element/bundle';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { AovivoComponent } from './pages/aovivo/aovivo.component';


registerSwiperElements();


@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    LoginComponent,
    NavbarComponent,
    RegistrarComponent,
    AovivoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

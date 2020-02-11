import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhonesComponent } from './phones/phones.component';
import { LogoComponent } from './logo/logo.component';
import { BannerComponent } from './banner/banner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesMenuComponent } from './cities/cities-menu/cities-menu.component';
import { DomComponent } from './dom/dom.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ResortComponent } from './resort/resort.component';
import { InfoComponent } from './info/info.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhonesComponent,
    LogoComponent,
    BannerComponent,
    NavigationComponent,
    SliderComponent,
    CitiesComponent,
    CitiesMenuComponent,
    DomComponent,
    ResortsComponent,
    ResortComponent,
    InfoComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

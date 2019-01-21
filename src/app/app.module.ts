import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{MDBBootstrapModule} from 'angular-bootstrap-md';
//import {NgxImageZoomModule} from 'ngx-image-zoom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { PublicationComponent } from './publication/publication.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    ActualitesComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    CabinetComponent,
    AccueilComponent,
    LoginComponent,
    PublicationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule , 
    MDBBootstrapModule.forRoot()
   // NgxImageZoomModule.forRoot()
  ],
 // schemas : [NO_ERRORS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

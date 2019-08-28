import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { PortfolioPieceComponent } from './components/portfolio-piece/portfolio-piece.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioPageComponent } from './static/portfolio-page/portfolio-page.component';
import { HomePageComponent } from './static/home-page/home-page.component';
import { ServicesPageComponent } from './static/services-page/services-page.component';
import { ContactPageComponent } from './static/contact-page/contact-page.component';
import { AboutUsPageComponent } from './static/about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortfolioPieceComponent,
    PortfolioPageComponent,
    HomePageComponent,
    ServicesPageComponent,
    ContactPageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
